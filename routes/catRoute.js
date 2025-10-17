const express = require("express");
const { getProfile } = require("../controllers/catCon");
const router = express.Router();

router.get("/", getProfile);

module.exports = router;
