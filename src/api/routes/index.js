const Router = require("express").Router();
const urlRouter = require("./url");

Router.use("/v1/urls", urlRouter);

module.exports = Router;
