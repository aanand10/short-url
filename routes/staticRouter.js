const express = require("express");
const URL = require("../models/URL");
const router = express.Router();

router.get("/", async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
});

router.get("/signup", async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("signup", {
    urls: allUrls,
  });
});

router.get("/login", async (req, res) => {
  return res.render("signin");
});

module.exports = router;
