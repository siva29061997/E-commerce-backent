const User = require('../models/userModel')

const signup = async (req, res, next) => {
    console.log(req.body)
    try {
        const user = await new User(req.body);
        await user.save();
        console.log(`Signing up successfully,`, user);

        res.status(201).json({
            user: user.toObject({ getters: true }),
        });
    } catch (error) {
        console.log(error);
        error.status = error.status || 400;
        next(error);
    }
};
const login = async (req, res, next) => {
    console.log(req.body)
    try {
        const user = await User.findByCredentials;
        res.send({ user });
    } catch (error) {
        error.status = error.status || 400;
        next(error);
    }
};

module.exports = { signup, login }