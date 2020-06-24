
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const serverless = require('serverless-http');
const routes = require('./routes');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/.netlify/functions/express', routes);

module.exports.handler = serverless(app);
