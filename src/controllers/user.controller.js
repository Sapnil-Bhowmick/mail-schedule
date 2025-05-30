const userModel = require("../models/user.model.js")


const registerUser = async (req, res, next) => {
    try {

        const now = new Date();
        const currentHour = now.getHours(); 

        if (currentHour <= 17) {
            return res.json({
                message: "Registrations are closed for today. Please try again tomorrow before 5 PM."
            });
        }


        const newUser = await userModel.create({
            ...req.body,
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