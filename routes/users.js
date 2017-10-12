var express = require('express');
var router = express.Router();
let logger = require('log4js').getLogger('user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  logger.info('use / ' + new Date);
  res.send('respond with a resource');
});

module.exports = router;
