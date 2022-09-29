const express = require('express');
require('express-async-errors');
const cors = require('cors');
const loginRouter = require('../routers/loginRouter');
const registerRouter = require('../routers/registerRouter');
const customerRouter = require('../routers/customerRouter');

const app = express();
app.use(express.json());

app.use(cors());

app.use('/', loginRouter);
app.use('/register', registerRouter);
app.use('/customer', customerRouter);
app.get('/coffee', (_req, res) => res.status(418).end());


module.exports = app;
