const express = require('express');
const authCtrl = require('../controllers/auth.controller');

const router = express.Router();

router.route('auth/signin')
    .post(authCtrl.signin);
router.route('auth/signup')
    .get(authCtrl.signout);

module.exports = router;