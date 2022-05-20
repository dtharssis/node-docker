const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Model Project Node On Docker');
});

module.exports = app;