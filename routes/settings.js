var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.isAuthenticated()){
    res.redirect('/');
  }
  else{
    res.render('settings', {title: 'Wind Analysis - Settings'});
  }
});

module.exports = router;