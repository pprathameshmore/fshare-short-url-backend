module.exports = (app) => {
  const express = require("express");
  const path = require("path");
  const { config } = require("../configs/index");

  const apiRouter = require("../api/routes/index");
  const redirectRouter = require("../api/routes/redirect");

  require("./logger")(app);

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, "public")));

  //API Routes
  app.use(`/api`, apiRouter);

  app.use("/", redirectRouter);
};
