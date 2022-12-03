var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { layout:"main", title: 'Express-one changed' }); // index is page. and will use layout as the maian layout
});
router.get('/search', function(req, res, next) {
  res.render('search', { layout:"main", title: 'Search-page-test' }); // search is page. and will use layout as the maian layout
});
module.exports = router;
