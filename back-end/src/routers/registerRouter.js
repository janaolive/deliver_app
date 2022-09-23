const { Router } = require('express');
const registerController = require('../controllers/registerController');

const registerRouter = Router();

registerRouter.post('/register', registerController.register);

module.exports = registerRouter;
