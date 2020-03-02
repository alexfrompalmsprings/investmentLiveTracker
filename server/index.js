const express = require('express');
const db = require('../db');

const path = require('path');
const bodyParser = require('body-parser');
// const morgan = require('morgan');

// what do we need from the controllers folder?
const controllers = require('./controllers/stocks.js')


const app = express();
// app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));





// lucky port 88 🤟
const PORT = process.env.PORT || 3188;

app.listen(PORT, () => {
  console.log(`App is running on port → ${PORT} `);
});

