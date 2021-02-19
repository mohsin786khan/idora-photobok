const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const db=require('./config/mongoose');

//library used
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');
const bcrypt = require('bcrypt');



//middleware
app.use(express.json());
app.use(cors());
//use routes
app.use('/', require('./routes'));

app.listen(port, async function(err){
    if(err){
        console.log(`error in running of server;${err}`);
    }
  console.log(`server is running on port:${port}`);
    });