const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const dbConnection = require('./db/Db');
const router = require('./routes/Todo');
const cors = require('cors')
dotenv.config();
const app = express();

app.use(express.json())
app.use(cors())
// database connection
dbConnection();

// calling routes 
app.use('/', router)
// app.get('/', (req, res) => {
//     res.send('namaste from express server')
// })

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})