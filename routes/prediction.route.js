const express = require("express");
const { getPrediction } = require("../controllers/prediction.controller")
const { body } = require('express-validator');

const router = express.Router();




router.post("/", [
    body("sequence")
        .exists()
        .isString()
    ,
    body("filterForWords").isBoolean()
], getPrediction)


module.exports = router