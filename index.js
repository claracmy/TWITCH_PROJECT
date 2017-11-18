const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./config/routes');
const { dbURI, port } = require('./config/environment');
const environment = app.get('env');
const customResponses = require('./lib/customResponses');
const errorHandler = require('./lib/errorHandler');
const jwtErrorHandler = require('./lib/jwtErrorHandler');
const cors = require('cors');
const expressJWT = require('express-jwt');

const mongoose = require('mongoose');
mongoose.plugin(require('./lib/globalToJSON'));
mongoose.Promise = require('bluebird');
mongoose.connect(dbURI[environment], { useMongoClient: true });

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

app.use(jwtErrorHandler);
app.use(customResponses);
app.use(errorHandler);
app.use('/api', router);

app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () =>
  console.log(`Express is up and running on port: ${port}`)
);

module.exports = app;
