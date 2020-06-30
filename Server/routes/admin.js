const express = require('express');

const {
    getAllUsers,
    addUser,
    addVirus
} = require('../functionalities/admin.js');

const router = express.Router();

router.route('/usernames')
    .get(getAllUsers);

router.route('/addVirus')
    .post(addVirus);

router.route('/addUser')
    .post(addUser);
    
module.exports = router;