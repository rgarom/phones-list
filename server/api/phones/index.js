"use strict";

const express = require("express"),
  controller = require("./phones.controller");

let router = express.Router();

router.get("/", controller.index);

module.exports = router;
