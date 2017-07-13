"use strict";

let phones = [
  {
    id: 1,
    title: "iPhone 7",
    desc: "Best Apple mobile phone ever",
    image: "https://tienda.yoigo.com/pictures/14556/apple-iphone-7-oro-front.jpg",
    color: "gold",
    price: 739
  },
  {
    id: 2,
    title: "Samsung Galaxy S8",
    desc: "Best Samsung mobile phone ever",
    image: "https://tienda.yoigo.com/pictures/16994/samsung-galaxy-s8-negro.jpg",
    color: "black",
    price: 789
  }
];

module.exports = {
  getPhones: () => phones
};
