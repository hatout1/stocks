"use strict";
const v8 = require("v8");

const totalHeapSize = v8.getHeapStatistics().total_available_size;
let totalHeapSizeInGB = (totalHeapSize / 1024 / 1024 / 1024).toFixed(2);

console.log("total heap size in GB" + totalHeapSizeInGB);

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 6000;
const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/project04_1_db";

mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("successfully connected to db");
  }
);

app.use(cookieParser());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const userRouter = require("./routes/userRoutes");
app.use("/", userRouter);

const apiRouter = require("./routes/apiRoutes");
app.use("/api", apiRouter);

// const axiosRouter = require("./routes/axiosRoutes");
// app.use("/scrape", axiosRouter);

//****************** alpacahq information *************************
// const Alpaca = require("@alpacahq/alpaca-trade-api");

// const alpaca = new Alpaca({
//   keyId: process.env.APCA_API_KEY_ID,
//   secretKey: process.env.APCA_API_SECRET_KEY,
//   paper: true,
//   usePolygon: false,
// });

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
