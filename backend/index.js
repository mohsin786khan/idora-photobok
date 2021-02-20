const express = require('express');
const dotenv = require('dotenv')
const colors = require('colors')
const path = require('path')
const cors = require('cors');
const connectDB = require('./config/mongoose.js');

dotenv.config()

connectDB()

//library used
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');
const bcrypt = require('bcrypt');

const app = express();

//middleware
app.use(express.json());
app.use(cors());
//use routes
app.use('/', require('./routes'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`.brightYellow.bold));
