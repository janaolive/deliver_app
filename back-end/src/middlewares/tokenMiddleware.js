const jwt = require('jsonwebtoken');
const ValidateError = require('./ValidateError');
require('dotenv').config();

const secret = process.env.JWT_SECRET || '123456';

const auth = (token) => {
  if (!token) throw new ValidateError(401, 'Token not found');
  try {
    const data = jwt.verify(token, secret);
    return data;
  } catch (error) {
    throw new ValidateError(401, 'Token must be a valid token');
  }
};

const verifyToken = (password) => jwt.verify(password, secret);

const setToken = (payload) => jwt.sign({ data: payload }, secret);

module.exports = {
  auth,
  verifyToken,
  setToken,
};