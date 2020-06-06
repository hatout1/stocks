const mongoose = require("mongoose");
// const Note = require("./Notes");

const Schema = mongoose.Schema;

let ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    //    required: true
  },
  link: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    // required: true
  },
  saved: {
    type: Boolean,
    default: false,
  },
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
