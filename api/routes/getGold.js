const express = require('express');
const router = express.Router();
const fs = require("fs");

router.get('/', function (req, res, next) {
    const file = JSON.parse(fs.readFileSync("public/json/gold.json"));
    res.send(file);
});

module.exports = router;
