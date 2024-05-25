const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetRedirectURL,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/:id", handleGetRedirectURL);

module.exports = router;
