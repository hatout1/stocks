const express = require("express");
const apiRouter = express.Router();
const Alert = require("../models/alerts");
const Portfolio = require("../models/portfolio");
const WatchList = require("../models/watchList");

apiRouter.post("/api/alert", (req, res) => {
  Alert.create({
    alert,
    userId,
  })
    .then((alert) => {
      res.json(alert);
    })
    .catch((err) => {
      res.json(err);
    });
});

apiRouter.post("/api/portfolio", (req, res) => {
  Portfolio.create({
    stock,
    quantity,
    pricePaid,
    UserId,
  })
    .then((portfolio) => {
      res.json(portfolio);
    })
    .catch((err) => {
      res.json(err);
    });
});

apiRouter.post("/api/watchList", (req, res) => {
  WatchList.create({
    stock,
    UserId,
  })
    .then((watchList) => {
      res.json(watchList);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = apiRouter;
