const express = require('express');
const loginRouter = require('../routers/loginRouter');
const registerRouter = require('../routers/registerRouter');

const app = express();

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRouter);
app.use('/register', registerRouter);

module.exports = app;
