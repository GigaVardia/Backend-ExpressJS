const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
require('dotenv').config();

const singin = async (req, res) => {
    try {
        let user = await User.findOne({"email": req.body.email});
        if (!user) {
            return res.status(401).json({error: "User not found!"});
        }

        if (!user.authenticate(req.body.password)) {
            return res.status(401).json({
                error: "Authenticate failed!"
            });
        }

        const token = jwt.sing({_id: user._id}, process.env.JWT_SECRET);

        res.cookie('t', token, {expire: new Date() + 9999});

        return res.json({
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (err) {
        return res.status(401).json({error: "Could not sign in!"});
    }
};

const singout = (req, res) => {
    res.clearCookie('t');
    return res.json({
        message: "Signed out!"
    });
};

const requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'auth'
});

const hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
    if (!(authorized)) {
        return res.status(403).json({
            error: "User is not authorized!"
        });
    }
    next();
};

module.exports = {
    singin,
    singout,
    requireSignin,
    hasAuthorization
}
