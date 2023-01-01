const express = require('express');
const {validator, auth} = require('../middlewares');
const { getAll, createContact, deleteContact } = require('../controllers/contactsControllers');

const router = express.Router();
router.get('/contacts', auth, getAll);
router.post('/contacts', auth, createContact);
router.delete('/contacts/:id', auth, deleteContact);

module.exports = router