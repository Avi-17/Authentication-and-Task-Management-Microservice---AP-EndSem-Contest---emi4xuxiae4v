const express = require('express');
const { signUpController } = require('../controllers/authControllers/signUpController');
const { loginController } = require('../controllers/authControllers/loginController');

const router = express.Router();

router.post('/signup', signUpController);
router.post('/login', loginController);

module.exports = router;