const Joi = require('joi');
// const bcrypt = require('bcrypt');
const models = require('../database/models');
const ValidateError = require('../middlewares/ValidateError');
const { setToken } = require('../middlewares/tokenMiddleware');

const schema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6),
}).messages({
  'string.empty': 'All fields must be filled',
  'any.required': 'All fields must be filled',
});

const loginService = {
  async login(body) {
    const { error } = schema.validate(body);
    if (error) throw ValidateError(400, error.message);

    const { email, password } = body;

    const dataValues = await models.User.findOne({
      where: { email },
    });

    if (!dataValues) throw ValidateError(401, 'Incorrect email or password');

    // const verified = await bcrypt.compare(password, dataValues.password);

    // if (!verified) throw new ValidateError(401, 'Incorrect email or password');

    const token = setToken({ email, password });

    return { token };
  },
};

module.exports = loginService;
