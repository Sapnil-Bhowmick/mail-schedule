
const express = require("express")

const app = express()

const router = require("./Routes/index.js")


require("./utils/cronJob.js")


app.use("/" , express.json())


// * Applying Version-1 Routes 
app.use("/api/V1" , router)





app.use("/", (req, res, next) => {
    const error = new Error("This route does not exist");
    error.status = 404;
    next(error); 
});




app.use("/", (err, req, res, next) => {
    res.status(err.status || 500)
    return res.json({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})


module.exports = app