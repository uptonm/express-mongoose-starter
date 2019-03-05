const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();
const router = express.Router();
require('./routes/routes')(router);

app.use(cors());
app.use(morgan('dev'));
app.use('/api', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;
