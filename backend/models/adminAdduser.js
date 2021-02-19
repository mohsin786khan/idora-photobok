const mongoose = require('mongoose');

const adduserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique:true
    },
    name: {
        type: String,
        required:true
    },
    contact: {
        type: String,
        required:true
    },
    status: {
        type:Boolean,
        default: true
    }
}, {
    timestamps:true
});

const Adduser = mongoose.model('Adduser', adduserSchema);
module.exports = Adduser;
