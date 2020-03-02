const mongoose = require('mongoose');

// will add more things depending on the API
const tickerSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  ticker: String
});

const Ticker = mongoose.model('Ticker', tickerSchema);

module.exports = Ticker;