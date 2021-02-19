const mongoose = require('mongoose');

const masterSchema = new mongoose.Schema({
    state: {
        type: String,
        required:true
    },
    city: {
        type: String,
        required:true,
    },
    pincode: {
        type: Number,
        required:true
    },
    location: {
        //GEO Json
        type: String,
        required:true
    },
    latitude: {
        type:String
    },
    longitude: {
        type:String
    },
    status: {
        type: Boolean,
        default:true 
    }
}, {
        timestamps: true
});


const Master = mongoose.model('Master', masterSchema);

module.exports = Master;