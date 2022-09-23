const express = require('express');
require('express-async-errors');
const loginRouter = require('../routers/loginRouter');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(express.json()); // adicionei esse parser para o express poder lidar com as informações do req.body
app.use('/login', loginRouter);

module.exports = app;