const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let WatchListSchema = new Schema({
  stock: {
    type: String,
  },
  UserId: {
    type: String,
  },
});

const WatchList = mongoose.model("WatchList", WatchListSchema);
module.export = WatchList;
