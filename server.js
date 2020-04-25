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

if (process.env.NODE_END === "production") {
  app.use(express.static("client/build"));

  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const userRouter = require("./routes/userRoutes");
app.use("/", userRouter);

const apiRouter = require("./routes/apiRoutes");
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
