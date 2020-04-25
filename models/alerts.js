const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let AlertSchema = new Schema({
  alert: {
    type: String,
  },
  userId: {
    type: String,
  },
});

const Alert = mongoose.model("Alert", AlertSchema);
module.exports = Alert;
