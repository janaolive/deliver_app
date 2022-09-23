const Joi = require('joi');
const bcrypt = require('bcrypt');
const db = require('../database/models');
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
    if (error) throw new ValidateError(400, error.message);

    const { email, password } = body;

    const dataValues = await db.User.findOne({
      where: { email }, raw: true,
    });

    if (!dataValues) throw new ValidateError(401, 'Incorrect email or password');

    const { id, name, role } = dataValues

    const verified = await bcrypt.compare(password, dataValues.password);

    if (!verified) throw new ValidateError(401, 'Incorrect email or password');

    const token = setToken({ id, name, role });

    return { token };
  },
};

module.exports = loginService;