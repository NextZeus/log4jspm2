var express = require('express');
var router = express.Router();
let logger = require('log4js').getLogger('index');

/* GET home page. */
router.get('/', function(req, res, next) {
  logger.info('get index '+ new Date);
  res.render('index', { title: 'Express' });
});

module.exports = router;
