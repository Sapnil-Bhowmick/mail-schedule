
const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    } ,

    emailID: {
        type: String,
        required: true
    } ,

    registration_No: {
        type: String
    }
})




const userModel = mongoose.model("User" , userSchema)


module.exports = userModel