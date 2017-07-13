"use strict";

const phones = require("./phones.model");

let index = (req, res) => {
  let phonesList = phones.getPhones();
  setTimeout(() => {
    res.send(phonesList);
  }, 1000);
};

module.exports = {
  index
};
