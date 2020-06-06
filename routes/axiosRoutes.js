const express = require("express");
const axios = require("axios");
const axiosRouter = express.Router();
const env = require("dotenv");

const apiKey = process.env.FinanceAPI;
const url = process.env.FinanceURl;

// axiosRouter.get(url, (req, res) => {});

// const express = require("express");
// const router = express.Router();
// const path = require("path");
// const axios = require("axios");
// const cheerio = require("cheerio");
// const mongoose = require("mongoose");

router.get("/scrape", (req, res) => {
  axios.get("https://www.finfiv.com").then((urlencoded) => {
    const $ = cheerio.load(urlencoded.data);
    console.log("$");
    res.send("Scrape Complete");
  });
});

// module.exports = axiosRouter;
