const Router = require("express").Router();
const Url = require("../../models/url");

Router.get("/:shortUrl", (req, res, next) => {
  console.log(req.params);
  const { shortUrl } = req.params;
  Url.findOne({ shortUrl: shortUrl })
    .then((url) => {
      if (!url) {
        return res.status(404).send("URL is not valid");
      }
      console.log(url);
      return res.redirect(302, url.originalUrl);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = Router;
