const express = require('express');
const router = express.Router();
const JSON = require("JSON");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/surprise', (req, res) => {
    res.send({"hello": "world"});
});

module.exports = router;
