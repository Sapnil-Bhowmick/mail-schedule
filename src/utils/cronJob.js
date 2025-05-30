
const cron = require('node-cron');
const { sendMail } = require('./mail');
const { generateCSVData } = require('./generateCSV');



console.log("Inside cronjob")


cron.schedule('* 23 * * *', async() => {
    console.log("Shduling - " + new Date())
    const csvFilePath = await generateCSVData()
    await sendMail("sapnilfrontend23@gmail.com" , csvFilePath)
});


// const generate = async() => {
//     const csvFilePath = await generateCSVData()
// }

// generate()


