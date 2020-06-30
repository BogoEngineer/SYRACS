const mongoose = require('mongoose');
const User = require('../collections/User.js');
const Virus = require('../collections/Virus.js');

// PUT users/register
// privilege: All
exports.registerUser = async (req, res, next) => {
    let user = req.body;
    let new_user = await User.create(user);
    res.status(200).json({
        success: true,
        data: new_user.admin
    })
}

// POST users/login
// privilege: All
exports.logIn = async (req, res, next) => {
    let user = req.body;
    let found = await User.find({
        username: user.username,
        password: user.password
    });
    res.status(200).json({
        success: true,
        data: found
    })
}

// POST users/changePassword
// privilege: All
exports.changePassword = async (req, res, next) => {
    let user = req.body;
    let found = await User.findByIdAndUpdate(user.id,
        {password: user.password});
    
    res.status(200).json({
        success: true,
        data: found
    })
}

// GET users/getViruses
// privilege: All
exports.getViruses = async (req, res, next) => {
    let found = await Virus.find();
    
    res.status(200).json({
        success: true,
        data: found
    })
}

// GET users/getUsers
// privilege: All
exports.getUsers = async (req, res, next) => {
    let found = await User.find();
    
    res.status(200).json({
        success: true,
        data: found
    })
}