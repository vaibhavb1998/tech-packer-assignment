const express = require("express");
const routes = express.Router();

// controllers
const { getTemplates } = require("./controller");

// #desc: This API will return the templates
routes.route("/").get(getTemplates);

module.exports = routes;
