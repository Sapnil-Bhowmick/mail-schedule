require("dotenv").config()
const app = require("./app.js")
const Initialize_DB_Connection = require("./config/dbConnection.config.js")



//* ENV variables
const { MONGODB_CONNECTION_URI } = process.env
const port = process.env.PORT || 8000


//* Initialize Database Connection
let server
Initialize_DB_Connection(MONGODB_CONNECTION_URI)
    .then(() => {
        console.log("Database Connection Eshtablished Successfully")
        server = app.listen(port, () => {
            console.log(`Server listening on ${port}...`)
        })

    })
    .catch((err) => {
        console.log(`Failed to Eshtablish database Connection : ${err.message}`)
        exitHandler()
    })






// !----------------- Handling Unhandled Errors -----------------

const exitHandler = () => {
    if (server) {
        logger.info("Server Closed")
        process.exit(1)
    } else {
        process.exit(1)
    }
}


const unexpectedErrorHandler = (error) => {
    logger.error(error)
    exitHandler()
}

process.on("uncaughtException", unexpectedErrorHandler)
process.on("unhandledRejection", unexpectedErrorHandler)

process.on("SIGTERM", unexpectedErrorHandler)