const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetRedirectURL,
  handleGetAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/:id", handleGetRedirectURL);
router.get("/analytics/:shortID", handleGetAnalytics);

module.exports = router;
