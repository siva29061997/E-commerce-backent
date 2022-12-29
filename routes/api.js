const express = require("express");
const apiRouter = express.Router();

const userRouter = require('../routes/user-routs')
apiRouter.use("/users", userRouter);

module.exports = apiRouter;