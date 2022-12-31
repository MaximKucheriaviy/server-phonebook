const express = require('express');
const {validator, auth} = require('../middlewares');
const { getAll, createContact } = require('../controllers/contactsControllers');

const router = express.Router();
router.get('/contacts', auth, getAll);
router.post('/contacts', auth, createContact);

module.exports = router