const mongoose = require('mongoose');
const User = require('../collections/User.js');
const Virus = require('../collections/Virus.js');

// GET admin/usernames
// privilege: All
exports.getAllUsers = async (req, res, next) => {
    let companies = await Company.find().select('abbreviation -_id');
    let users = await User.find().select('username -_id');
    let usernames = companies.concat(users);
    res.status(200).json({
        success: true,
        data: usernames
    })
}

// POST admin/addVirus
// privilege: All
exports.addVirus = async (req, res, next) => {
    let added = Virus.create(req.body);
    res.status(200).json({
        success: true,
        data: added
    })
}

// POST admin/addUser
// privilege: All
exports.addUser = async (req, res, next) => {
    let added = User.create(req.body);
    res.status(200).json({
        success: true,
        data: added
    })
}