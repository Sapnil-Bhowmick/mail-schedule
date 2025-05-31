
const cron = require('node-cron');
const { sendMail } = require('./mail');
const { generateCSVData } = require('./generateCSV');



cron.schedule('0 10 * * *', async() => {
    const csvFilePath = await generateCSVData()
    await sendMail("sapnilfrontend23@gmail.com" , csvFilePath)
});





