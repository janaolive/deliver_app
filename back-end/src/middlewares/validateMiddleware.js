const { validate } = require('./tokenMiddleware');

module.exports = {
  validateToken: async (req, _res, next) => {
    const token = req.headers.authorization;
    await validate(token);
    next();
  },
};
