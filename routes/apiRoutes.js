const express = require("express");
const apiRouter = express.Router();
const Alert = require("../models/alerts");
const Portfolio = require("../models/portfolio");
const WatchList = require("../models/watchList");

const path = require("path");
const axios = require("axios");
const cheerio = require("cheerio");

const Article = require("../models/Articles");

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

// apiRouter.get("/api/scrape", (req, res) => {
//   // axios.get("https://www.finfiv.com").then((urlencoded) => {
//   //   const $ = cheerio.load(urlencoded.data);
//   //   console.log("$");
//   //   // res.send("Scrape Complete");
//   // });

//   axios.get("https://www.nytimes.com/section/technology").then((urlencoded) => {
//     const $ = cheerio.load(urlencoded.data);
//     $("li.css-ye6x8s").each((i, element) => {
//       let data = {};

//       data.link = "https://www.nytimes.com" + $(element).find("a").attr("href");
//       data.title = $(element).find("h2.css-1j9dxys").text();
//       data.summary = $(element).find("p.css-1echdzn").text();
//       data.picture = $(element).find("img.css-11cwn6f").attr("src");
//     });

//     res.send("Scrape Complete");
//   });
// });

apiRouter.get("/scrape", (req, res) => {
  axios
    .get(
      "https://finance.yahoo.com/screener/unsaved/06c3239a-376a-4df9-be15-d591cd726f4f"
    )
    // .then((urlencoded) => {
    .then((res) => {
      console.log(res);

      const $ = cheerio.load(urlencoded.data);
      console.log($);
      $("tr.table-dark-row-cp").each((i, element) => {
        let data = {};

        data.company = $(element).find("td");

        console.log(data.company);
        // data.title = $(element).find("h2.screener-body-table-nw").text();
        // data.summary = $(element).find("p.css-1echdzn").text();
        // data.picture = $(element).find("img.css-11cwn6f").attr("src");

        let entry = new Article(data);

        Article.find({
          title: data.title,
        }).then((articles) => {
          if (articles.length > 0) {
            console.log("Every thing is up to date");
          } else {
            entry.save((err, doc) => {
              if (err) {
                console.log(err);
              } else {
                console.log(doc);
              }
            });
          }
        });
      });
      res.send("Scrape Complete");
    });
});

module.exports = apiRouter;
