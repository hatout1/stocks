const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let PortfolioSchema = new Schema({
  stock: {
    type: String,
  },
  quantity: {
    type: String,
  },
  pricePaid: {
    type: String,
  },
  UserId: {
    type: String,
  },
  availableCach: {
    type: String,
  },
  transactionsHistory: {
    type: String,
  },
});

const Portfolio = mongoose.model("Porfolio", PortfolioSchema);
module.export = Portfolio;
