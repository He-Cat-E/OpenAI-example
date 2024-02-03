const express = require("express");

const router = express.Router();
const analysis = require("./analyzer.controller");

router.post("/analyze", analysis.analysis);

module.exports = router;
