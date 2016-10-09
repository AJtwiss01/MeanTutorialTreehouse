'use strict';

var express = require('express');
var router = express.Router();
router.get('/todos', function(req, res) {
    console.log(req);
    // res.send('these are todos');
    res.json({ hello: [] });
});
//TODO: add a post route create new entries
// TODO: add a Putt route
// TODO: add a Delete route


module.exports = router;