module.exports = function errorHandler(err, req, res, next) { //eslint-disable-line
  err.code = err.code || 500;
  err.message = err.message || 'INTERNAL SERVER ERROR';

  if (err.name === 'SyntaxError' || err.name === 'ValidationError') {
    err.code = 400;
    err.message = 'INVALID DATA INPUT';
  }

  if (err.name === 'CastError') {
    err.code = 404;
    err.message = 'RESOURCE NOT FOUND';
  }

  console.error(err.code, err.message);
  res.status(err.code);
  res.send(`${err.code} ERROR, ${err.message}!`);
};