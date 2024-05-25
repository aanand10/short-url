// functions which will associate with routes
const URL = require("../models/URL");
const { nanoid } = require("nanoid");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ err: "url is required" });

  const shortId = nanoid(8);
  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({
    id: shortId,
  });
}

async function handleGetRedirectURL(req, res) {
  const shortRoute = req.params.id;

  const routeObj = await URL.find({ shortId: shortRoute });

  return res.status(200).json({
    URLtoRedirect: routeObj.redirectURL,
  });
}

module.exports = { handleGenerateNewShortURL, handleGetRedirectURL };
