const Ticker = require('../../db/models/Ticker');


exports.addATicker = (req, res) => {
  console.log('trying to add a ticker to the DB', req.body)
  //what are we getting as the req body
  Ticker.create(req.body, err => {
    if (err) {
      return console.log('There is an issue adding tickers into the database')
    } else {
      console.log('Successfully added a ticker into the DB')
      res.send(req.body);
    }
  })

}



exports.getAllTickers = (req, res) => {

  // console something to see if something is happening.
  console.log('we have a user trying to access the stocks info 👌')

  Ticker.find({}, (err, tickers) => {
    if (err) {
      return console.log('There is an issue getting all the tickers from the database', err)
    }
    res.send(tickers)
  })

}