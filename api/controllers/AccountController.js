module.exports = {

    verrou: function(req, res) {
        return res.view('homepage');
        //return res.redirect('/');
    },

    index: function(req, res) {
        return res.view('account', {user: req.user});
    },

    addresses: function(req, res) {

        var data = {
            name: 'test',
            address: 'une autre donnée',
            un_obj: {
                un_truc: 'valeur',
                un_autre_truc: 'autre valeur'
            },
            mon_tableau: [
                'un',
                'deux'
            ],
            mon_tableau_js: [
                {
                    champ_1: 'champ_1_1',
                    champ_2: 'champ_1_2'
                },
                {
                    champ_1: 'champ_2_1',
                    champ_2: 'champ_2_2'
                }
            ]
        };

        console.log(req.user);

        Address.find({
            owner : req.user.id
        }).exec(function (err, records) {
            //return res.json(records);
            //var data = {};
            data.lesadresses = records;
            return res.view('addresses', data);
        });

    }
};