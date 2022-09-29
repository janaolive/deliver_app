const jwt = require('jsonwebtoken');
const fs = require('fs');
const ValidateError = require('./ValidateError');
require('dotenv').config();

/* const secret = process.env.JWT_SECRET || 'secret_key'; */
const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf8' });

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
