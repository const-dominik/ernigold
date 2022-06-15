const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');

// Routes
const getGold = require("./routes/getGold");
const setGold = require("./routes/setGold");
const removeWorld = require("./routes/removeWorld");

// App
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/gold', getGold);
app.use('/save_gold', setGold);
app.use('/remove_world', removeWorld)

module.exports = app;