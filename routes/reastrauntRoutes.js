const express = require('express');
const router = express.Router();
const controller = require('../controllers/reastrauntControllers.js');
router.get("/menu.html", controller.menu_page);
router.get('/json', controller.menu_page_json);  
router.get('/reastraunt', controller.entries_list);

const auth = require('../auth/auth.js');
const {ensureLoggedIn} = require('connect-ensure-login');

router.get("/", controller.landing_page);

router.get('/reastraunt', controller.entries_list);

//router.get('/new', controller.new_entries);
//router.get('/new', controller.show_new_entries);
router.get('/new', ensureLoggedIn('/register'), controller.show_new_entries);
//router.post('/new', controller.post_new_entry);
router.post('/new', ensureLoggedIn('/register'), controller.post_new_entry);
router.get('/update', ensureLoggedIn('/register'), controller.Update_menu_page);
router.get('/json', controller.menu_page_json);  

router.get('/register', controller.show_register_page);

router.post('/register', controller.post_new_user);

router.get('/login', controller.show_login_page);

router.post("/login", auth.authorize("/login"),controller.post_login);


router.get("/loggedIn", controller.loggedIn_landing);

/*router.get("/loggedIn",function(req, res) {
    res.type('text/plain');
    res.send('logged in');
});*/


router.get("/logout", controller.logout);


router.use(function(req, res) {
        res.status(404);
        res.type('text/plain');
        res.send('404 Not found.');
    });

router.use(function(err, req, res, next) {
        res.status(500);
        res.type('text/plain');
        res.send('Internal Server Error.');
    });

    router.get('/about', function(req, res) {
        res.redirect('/about.html');
    })
    router.get('/creed', function(req, res) {
        res.redirect('/creed.html');
    })
    router.get('/hours', function(req, res) {
        res.redirect('/hours.html');
    })    

module.exports = router;
