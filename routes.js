var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Customer Order Reporting Tool' });
});

router.get('/create', function (req, res, next) {
    res.render('upsert');
});



module.exports = router;
