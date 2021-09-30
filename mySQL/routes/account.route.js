const router  = require('express').Router();
const Account = require('../controllers/account.controller');

router.route('/signUp')
    .post(Account.signUp);

module.exports = router;