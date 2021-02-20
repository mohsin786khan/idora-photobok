// const mongoose=require('mongoose');
// mongoose.connect('mongodb+srv://piyush123:piyush123@idoraphotobook.9tpon.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// });

// const db=mongoose.connection;

// db.on('error',console.error.bind(console,'error connecting to db'));

// db.once('open',function(){
// console.log('successfully connected');
// });
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`Mongodb connected: ${conn.connection.host}`.cyan.underline)
    } catch (err) {
        console.log(`Error: ${err.message}`.red.strikethrough)
        process.exit(1)
    }
}

module.exports = connectDB;


