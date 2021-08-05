const path = require("path");
const fs = require("fs");
const templates = require("../../data/templates");

exports.getTemplates = async (req, res, next) => {
  try {
    const modifiedTemplates = [];

    // attaching images as buffer
    templates.map((template) => {
      const thumbnailBuffer = fs
        .readFileSync(`./data/images/thumbnails/${template.thumbnail}`)
        .toString("base64");

      const imageBuffer = fs
        .readFileSync(`./data/images/large/${template.image}`)
        .toString("base64");

      const data = { ...template, thumbnailBuffer, imageBuffer };
      modifiedTemplates.push(data);
    });

    res.status(200).json({ templates: modifiedTemplates });
  } catch (err) {
    return next(err);
  }
};
