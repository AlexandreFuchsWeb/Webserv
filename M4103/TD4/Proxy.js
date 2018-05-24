ar http = require('http');
var https = require('https');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');
var pt = require("path");

var server = http.createServer(proxy).listen(60000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:60000/');

function proxy(req, res){
    if(req.method == "GET"){
        var path = url.parse(req.url, true).path;
        path = path.slice(1,path.length);
        if(path == "") {
            res.writeHead(200, {'Content-Type': 'text/html'});
            fs.readFile('index.html', function (err, data) {
                res.end(data);
            });
        }
        else{
            var ext = pt.extname(path);
            var type = "html";
            switch (ext){
                case ".js" :
                    type = "javascript";
                    break;
                case ".css" :
                    type = "stylesheet";
                    break;
            }
            fs.readFile(path, function (err, data) {
                if(data == null)
                {
                    res.writeHead(404);
                    res.end();
                }
                else
                {
                    res.writeHead(200, {'Content-Type': 'text/' + type})
                    res.end(data);
                }
            });
        }
    }
    else if (req.method == 'POST') {
        var body='';
        req.on('data', function (data) {
            body +=data;
        });
        req.on('end',function(){
            var POST =  qs.parse(body);
            if(POST.url != null && POST.url.indexOf("https") == 0){
                https.get(POST.url, function(resp){
                    data ='';
                    resp.on('data', function(chunk){
                        data += chunk;
                    });
                    resp.on('end', function(){
                        sendData(data,res);
                    });
                }).on("error", function(err){
                    console.log("Error: " + err.message);
                    res.writeHead(404);
                    res.end();
                });
            }
            else if(POST.url != null && POST.url.indexOf("http") == 0){
                http.get(POST.url, function(resp){
                    data ='';
                    resp.on('data', function(chunk){
                        data += chunk;
                    });
                    resp.on('end', function(){
                        sendData(data,res);
                    });
                }).on("error", function(err){
                    console.log("Error: " + err.message);
                    res.writeHead(404);
                    res.end();
                });
            }
        });
    }
}

function sendData(data,res) {
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(data);
}