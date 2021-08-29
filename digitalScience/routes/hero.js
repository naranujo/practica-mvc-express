var express = require('express');
var router = express.Router();
var heroController = require('../controllers/heroController')

/* GET home page. */
router.get('/', heroController.index);
router.get('/detail/id/:id', heroController.show);
router.get('/detail/id/:id/:ok?', heroController.showBio);

module.exports = router;