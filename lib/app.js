const express = require('express');
const app = express();
const morgan = require('morgan');
const errorHandler = require('./error-handler');
const users = require('./routes/users');


app.use(morgan('dev'));

if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header["x-forward-proto"] === 'https') next(); //eslint-disable-line
    else res.redirect(`http://${req.hostname}${req.url}`);
  });
}

app.use((req, res, next) => {
  console.log('setting cors headers'); //eslint-disable-line
  const url = '*';
  res.header('Access-Control-Allow-Origin', url);
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use(express.static('./public'));
app.use('/api/users', users);
app.use(errorHandler);

module.exports = app;