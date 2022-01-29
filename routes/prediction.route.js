const express = require("express");
const { getPrediction } = require("../controllers/prediction.controller")
const router = express.Router();



router.post("/", getPrediction)


module.exports = router