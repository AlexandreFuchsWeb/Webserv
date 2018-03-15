module.exports = {

    ma_methode: function(req, res) {
        return res.json({user: 'toto'});
        //return res.view('homepage');
    },
    find: function (req, res) {
        var where = {
            owner : req.user
        };
        Address.find(where).exec(function (err, records) {
            return res.json(records);
        });
    }
    /*
    var monObjet = {};
    monObjet.rajoute = 'rajouté';
     */

    /*
    find: function (req, res) {
        Address.find().exec(function (err, records) {
            return res.json(records);
        });
    }
    */
};
