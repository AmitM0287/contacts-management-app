const express = require('express');
const contactsRouter = express.Router();
const { fetchContacts } = require('../controllers/contacts.controller');

/* contacts routes */
contactsRouter.get('/', fetchContacts);

module.exports = contactsRouter;
