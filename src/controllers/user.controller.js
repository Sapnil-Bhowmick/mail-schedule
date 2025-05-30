const userModel = require("../models/user.model.js")


const registerUser = async (req, res, next) => {
    try {
        const newUser = await userModel.create({
            ...req.body ,
            registration_No: `REG-${Date.now()}`
        })

        res.json({
            message: "User Register Successfully",
            data: newUser
        })
    }
    catch (err) {
        next(err)
    }
}



module.exports = {
    registerUser
}