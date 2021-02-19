const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        // required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

const AddProduct = mongoose.model('AddProduct', ProductSchema);
module.exports = AddProduct