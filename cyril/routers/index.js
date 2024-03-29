var express = require('express');
var router = express.Router();

// home
router.get('/', ensureAuthenticated, (req, res) => {
    res.render('index');
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        req.flash('error_msg', 'Please log in');
        res.redirect('/users/login');
    }
}
module.exports = router;