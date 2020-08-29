"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var todos_1 = require("./routes/todos");
var app = express_1["default"]();
app.use(body_parser_1.json());
app.use("/todos", todos_1["default"]);
app.use(function (err, req, res, next) {
    res.status(500).json({ message: err.message });
});
app.listen(3000);
