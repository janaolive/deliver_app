const express = require('express');
const cors = require('cors');
require('express-async-errors');

const loginRouter = require('../routers/loginRouter');
const registerRouter = require('../routers/registerRouter');
const customerProductsRouter = require('../routers/customerProductsRouter');

const app = express();
app.use(express.json());

app.use(cors());

app.use('/', loginRouter);
app.use('/register', registerRouter);
app.use('/customer/products', customerProductsRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

// app.use(errorsMiddleware);

module.exports = app;