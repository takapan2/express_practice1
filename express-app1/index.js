const express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Express!");
});

app.listen(2000, () => {
    console.log("Start server port:2000");
});