const express = require('express');
const loginRouter = require('../routers/loginRouter');


const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRouter);

module.exports = app;
