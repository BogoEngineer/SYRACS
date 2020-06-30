const express = require('express');

const {
    registerUser,
    logIn,
    changePassword,
    getViruses,
    getUsers
} = require('../functionalities/users.js');

const router = express.Router();

router.route('/register')
    .put(registerUser);

router.route('/login')
    .post(logIn);

router.route('/changePassword')
    .post(changePassword);
    
router.route('/getViruses')
    .get(getViruses);

router.route('/getUsers')
    .get(getUsers);
module.exports = router;