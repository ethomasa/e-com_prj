const jwt = require("jsonwebtoken");
const User = require('../models/userModel.js')

const generateToken =(id) => {

    return jwt.sign({id}, process.env.JWT_SECRET, {

        expiresIn:'14d'
    })

    }
module.exports = generateToken ;