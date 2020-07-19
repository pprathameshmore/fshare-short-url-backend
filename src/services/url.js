const randomstring = require("randomstring");
const Url = require("../models/url");
const { config } = require("../configs/index");
exports.createUrl = async (originalUrl) => {
  const shortUrl = randomstring.generate(5);

  const saveUrl = new Url({
    originalUrl: originalUrl,
    shortUrl: shortUrl,
    link: `${config.HOST}/${shortUrl}`,
  });
  const savedShortUrl = await saveUrl.save();
  return savedShortUrl;
};
