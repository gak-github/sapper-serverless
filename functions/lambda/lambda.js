
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const serverless = require('serverless-http');
const routes = require('./routes');
let app;
const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
    app = require('../../__sapper__/dev/server/server');
} else {
    app = require('../../__sapper__/build/server/server');
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/lambda', routes);

module.exports.handler = serverless(app);