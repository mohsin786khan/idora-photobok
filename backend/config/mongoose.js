const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://piyush123:piyush123@idoraphotobook.9tpon.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to db'));

db.once('open',function(){
console.log('successfully connected');
});



