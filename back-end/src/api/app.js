const express = require('express');
const cors = require('cors');
require('express-async-errors');
const loginRouter = require('../routers/loginRouter');
const registerRouter = require('../routers/registerRouter');

const app = express();
app.use(express.json());

app.use(cors());

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.get('/coffee', (_req, res) => res.status(418).end());

// app.use(errorsMiddleware);

module.exports = app;