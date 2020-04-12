const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 6000;
const MONGODB = process.env.MONGODB_URI || "mongodb://localhost/project4";

mongoose.connect(
  MONGODB_URI,
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

const userRoutes = require("./routes/userRoutes");
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
