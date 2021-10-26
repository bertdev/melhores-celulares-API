require('dotenv').config();
const express = require('express');

const cors = require('./app/middlewares/cors');
const routes = require('./routes');
const errorHandler = require('./app/middlewares/errorHandler');

const app = express();

app.use(cors);
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(process.env.PORT || 3001);
