const mongoose = require('mongoose');

// might need to change the name of the database to MVP
const mongoURI = 'mongodb://localhost:27017/stockTracker';

const db = mongoose.connect(mongoURI, {
  useNewUrlParser: true
});


db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`)
    console.log(err);
  });

module.exports = db;