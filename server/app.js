const bodyParser = require('body-parser');
const passport = require('passport');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const app = express();

require('./models/user.model');
require('./services/auth');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/auth.routes');
const apiRoutes = require('./routes/routes');
const secureRoute = require('./routes/secure.routes');

app.use('/', routes);
app.use('/api', apiRoutes);
app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

// Handle errors
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = app;
