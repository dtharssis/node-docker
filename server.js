require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./src/routes');

app.use('/', routes);
app.listen(process.env.PORT, process.env.HOST);

console.log(`Running on http://${process.env.HOST}:${process.env.PORT}`);