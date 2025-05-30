const converter = require('json-2-csv');


const fs = require('fs');
const userModel = require("../models/user.model")

const path = require('path');



const generateCSVData = async () => {
    try {

        console.log("generating csv ...")
        const userData = await userModel.find({})

        // To rename fields
        const transformedUsersData = userData.map(user => ({
            'User-ID': user._id,
            'Full-Name': user.name,
            'Email Address': user.emailID,
            'Registration-No': user.registration_No,
        }));


        const options = {
            keys: ['User-ID', 'Full-Name', 'Registration-No' , 'Email Address'],
            emptyFieldValue: '',
        };


        const csvData = await converter.json2csv(transformedUsersData, options);

        // Generating File Path
        const filePath = path.join(__dirname, '..', 'Reports', 'Users.csv');

        // Ensuring directory exists
        fs.mkdirSync(path.dirname(filePath), { recursive: true });

        // Overwriting existing file if file is not present
        fs.writeFileSync(filePath, csvData, 'utf8');

        return filePath;

    } catch (err) {
        console.error(err)
    }
}




module.exports = {
    generateCSVData
}