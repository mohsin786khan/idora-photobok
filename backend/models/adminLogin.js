const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required:true
    }
}, {
    timestamps:true
});

adminSchema.methods.matchPassword = async function (enterPassword,password) {
    return await bcrypt.compare(enterPassword, password)
}

adminSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;