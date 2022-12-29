const userRouter = require("express").Router();
const dotenv = require("dotenv").config();
const auth = require('../middlewares/auth');
const userController = require('../controllers/userController');

// SIGNUP
userRouter.post("/auth/signup", userController.signup);

// LOGIN
userRouter.post("/auth/login", userController.login);

module.exports = userRouter;