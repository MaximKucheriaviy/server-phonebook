const express = require('express');
const { signup } = require('../controllers/userControllers');
const {validator} = require('../middlewares');

const router = express.Router();

router.post("/signup", validator.singupValidation, signup);


module.exports = router;