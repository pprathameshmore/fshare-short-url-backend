const url = require("express").Router();
const { createUrl } = require("../../services/url");
const { config } = require("../../configs/index");

url.post("/", async (req, res, next) => {
  const { originalUrl } = req.body;
  if (!originalUrl) return res.status(400).send("Required original URL");
  const shortUrlData = await createUrl(originalUrl);
  return res.status(201).json({
    message: "Short URL has been generated",
    data: shortUrlData,
  });
});

module.exports = url;
