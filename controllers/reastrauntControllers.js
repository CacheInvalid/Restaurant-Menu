const reastrauntDAO  = require('../models/reastrauntModel');
const userDao = require('../models/userModel.js');
const auth = require('../auth/auth.js');
const {ensureLoggedIn} = require('connect-ensure-login');
const db = new reastrauntDAO();
db.init();


exports.entries_list = function(req, res) {
    res.send('<h1>Not yet implemented: show a list of guest book entries.</h1>');
    db.getAllEntries();
}
/*
exports.landing_page = function(req, res) {
        res.send('<h1>Welcome to my Application.</h1>');
        }

exports.landing_page = function(req, res) {
    res.render("entries", {
        'title': 'Guest Book',
        'entries': [ {
        'subject': 'Good day out',
        'contents' :
        'We had a really good time visiting the museum.'
        },
        {
        'subject': 'Good place to be on a rainy day.',
        'contents' : 'Nice paintings too.'
        },
        {
        'subject': 'Yummy',
        'contents' : 'Good food :-).'
        }
        ]
        });

            }*/

            exports.menu_page_json = function(req, res) {
                db.getAllEntries()
                    .then((list) => {
                        res.send(list);
                        console.log(list);
                        console.log('json endpoint set up');
                    })
                    .catch((err) => {
                        console.log('promise rejected', err);
                    })
            }

            exports.menu_page = function(req, res) 
            {
                db.getAllEntries()
                    .then((list) => {
                        res.render('entries', {
                            'title': 'Menu',
                            'user': req.user,
                            'entries': list
                        });
                        console.log('promise resolved');
                    })
                    .catch((err) => {
                        console.log('promise rejected', err);
                    })
            }

            exports.Update_menu_page = function(req, res) 
            {
                db.getAllEntries()
                    .then((list) => {
                        res.render('entries', {
                            'title': 'Menu',
                            'user': req.user,
                            'entries': list
                        });
                        console.log('promise resolved');
                    })
                    .catch((err) => {
                        console.log('promise rejected', err);
                    })
            }

exports.new_entry = function(req, res) {
            res.send('<h1>Not yet implemented: show a new entry page.</h1>');
         }


         exports.new_entries = function(req, res)
       {
            res.render('newEntry', {
            'title': 'Menu'
            })
        }
        
        exports.post_new_entry = function(req, res) {
            console.log('processing post-new_entry controller');
            if (!req.body.name) {
            response.status(400).send("Entries must have a name.");
            return;
            }
            db.addEntry(req.body.name, req.body.description, req.body.ingredients, req.body.allergy, reg.body.chef, reg.body.price);
            res.redirect('/');
        }
        
        exports.show_new_entries = function(req, res) 
        {
            res.render('newEntry', {
            'title': 'Menu',
            'user': req.user
            })
        }
           
        exports.landing_page = function(req, res) {
            res.status(200);  
            res.redirect('/landing_page.html');
            
        }
        
        exports.about_page= function(req, res) { 
            res.status(200);  
            res.redirect('/about.html');
        }
        
        exports.creed_page = function(req, res) {
            res.status(200);  
            res.redirect('/creed.html');
        }
        
        exports.hours = function(req, res) {
            res.status(200);  
            res.redirect('/hours.html');
        }

 exports.show_user_entries = function(req, res) {
        let user = req.params.name;
        db.getEntriesByUser(user)
        .then((entries) => {
            res.render('entries', {
                'title': 'Menu',
                'user': req.user,
                'entries': entries
            });
         })
        .catch((err) => {
            console.log('Error: ')
            console.log(JSON.stringify(err))
        });
}

exports.show_register_page = function(req, res) {
    res.render("user/register");
    }

exports.post_new_user = function(req, res) {
    const user = req.body.username;
    const password = req.body.pass;
    
    if (!user || !password) {
        res.send(401, 'no user or no password');
        return;
    }
    userDao.lookup(user, function(err, u) {
    if (u) {
        res.send(401, "User exists:", user);
        return;
    }
    userDao.create(user, password);
    console.log("register user", user, "password", password);
    res.redirect('/login');
   });
}    

exports.show_login_page = function(req, res) {
    res.render("user/login");
 };

 exports.authorize = function(redirect) {
    return passport.authenticate('local',
    { failureRedirect: redirect});
    };

exports.post_login = function(req, res) {
     res.redirect("/");
    };

exports.logout = function(req, res) {
    req.logout();
    res.redirect("/");
    };

 exports.loggedIn_landing = function(req, res) {
        db.getAllEntries().then((list) => {
            res.render('entries', {
                'title': 'Guest Book',
                'user': req.user,
                'entries': list
             });

            }).catch((err) => {
                console.log('promise rejected', err);
                 })
}promise rejected', err);
                 })
}
