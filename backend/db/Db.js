const mongoose = require('mongoose')
const dotenv = require('dotenv')
const dbConnection = async () => {
    try {
        const result = await mongoose.connect(process.env.MONGODB_URL);
        console.log('connected succesfully')
    } catch (err) {
        console.log("got eroor", err)
    }
}
module.exports = dbConnection;