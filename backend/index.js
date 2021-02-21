const express = require('express');
const dotenv = require('dotenv')
const colors = require('colors')
const path = require('path')
const cors = require('cors');
const connectDB = require('./config/mongoose.js');

dotenv.config()

connectDB()

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//use routes
app.use('/', require('./routes'));


if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'frontend', 'build', 'index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send('API is running...')
    })
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`.brightYellow.bold));
