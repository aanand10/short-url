// functions which will associate with routes
const URL = require("../models/URL");
const { nanoid } = require("nanoid");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ err: "url is required" });
  if (body.url) {
    const linkPresent = await URL.findOne({ redirectURL: body.url });

    if (linkPresent) {
      return res.status(400).json({ err: "url is alrady used" });
    }
    const shortId = nanoid(8);
    await URL.create({
      shortId: shortId,
      redirectURL: body.url,
      visitHistory: [],
    });
    const allUrls = await URL.find({});

    return res.render("home", {
      id: shortId,
      urls: allUrls,
    });
  }

  // return res.json({
  //   id: shortId,
  // });
}

async function handleGetRedirectURL(req, res) {
  const shortId = req.params.id;

  const routeObj = await URL?.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  if (routeObj == null) {
    return res.send("<p> URL not found !</p>   ");
  }
  // return res.status(201).json({
  //   URLtoRedirect: routeObj,
  // });
  res.redirect(routeObj?.redirectURL);
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortID;

  const item = await URL.findOne({ shortId: shortId });
  console.log(item.visitHistory.length);

  return res.json({
    totalClicks: item.visitHistory.length,
    analytics: item.visitHistory,
  });

  return;
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetRedirectURL,
  handleGetAnalytics,
};
