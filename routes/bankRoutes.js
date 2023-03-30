const express = require('express');
const router = express.Router();
const bankController = require('../controllers/bankController');

router.route('/')
    .get(bankController.getAllAccounts)
    .post(bankController.createAccount)

router.route('/:id')
    .get(bankController.getAccountById)
    .patch(bankController.updateAccountById)
    .put(bankController.updateAccountById)
    .delete(bankController.deleteAccountById);

module.exports = router;
