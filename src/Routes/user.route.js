const express = require("express")
const userRouter = express.Router()

const {registerUser} = require("../controllers/user.controller.js")

userRouter.post("/register" , registerUser)


module.exports = {
    userRouter
}