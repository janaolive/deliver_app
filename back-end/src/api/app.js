const express = require('express');
require('express-async-errors');
<<<<<<< HEAD

const loginRouter = require('../routers/loginRouter');
const registerRouter = require('../routers/registerRouter');
const customerProductsRouter = require('../routers/customerProductsRouter');
=======
const cors = require('cors');
const loginRouter = require('../routers/loginRouter');
const registerRouter = require('../routers/registerRouter');
const customerRouter = require('../routers/customerRouter');
// const { errorsMiddleware } = require('./middleware/errorsMiddleware');
>>>>>>> 8d6a6e34... test about jwt

const app = express();
app.use(express.json());

app.use(cors());

app.use('/', loginRouter);
app.use('/register', registerRouter);
<<<<<<< HEAD
app.use('/customer/products', customerProductsRouter);

=======
app.use('/customer', customerRouter);
>>>>>>> 8d6a6e34... test about jwt
app.get('/coffee', (_req, res) => res.status(418).end());

// app.use(errorsMiddleware);

module.exports = app;
