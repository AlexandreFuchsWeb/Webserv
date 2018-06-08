$(document).ready(function () {
    $("#Choixrss").hide().change(function (event) {
        if(!(event.target.value == "")) {
            $("#ContenuRss").html('load');
            (
                "/",
                {
                    url: event.target.value
                },
                function () {
                    $("#ContenuRss").html();
                }
            )
                .fail(function () {
                    $("#ContenuRss").html("Erreur");
                });
        }
        else {
            $("#ContenuRss").html('');
        }

    });


    $("#choixVisible").click(function () {
        $("#Choixrss").toggle();
    });

function init(){
    if(window.XMLHttpRequest)
        xhr = new XMLHttpRequest();
    else
        console.log("Ajax impossible");
    if(xhr != null)
        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4 && xhr.status == 200){
                callback(xhr.responseText);
            }
            else if(xhr.readyState == 4){
                document.getElementById("ContenuRss").textContent = "Chargement impossible"
            }
        }

    document.getElementById("Choixrss").onchange = Choixrss;

}
//get
function Choixrss1() {
    document.getElementById("ContenuRss").textContent = "";
    if(this.value) {
        document.getElementById("ContenuRss").textContent = "wait"
        xhr.open("GET", this.value, true);
        xhr.send();
    }
}
//post
function Choixrss() {
    document.getElementById("ContenuRss").textContent = "";
    if(this.value) {
        document.getElementById("ContenuRss").textContent = "wait"
        xhr.open("POST", "http://127.0.0.1:60000/", true);
        xhr.send("url=" + this.value);
    }
}

function callback(data) {
    document.getElementById("ContenuRss").textContent = data;
}
addEventListener("load", init);