const mongoose = require('mongoose');
const userSchema = {
    name: {
        type: String,
        default: '',
        required: true
    },
    pwd: {
        type: String,
        default: '',
        required: true
    },
};
module.exports = mongoose.model('user', new mongoose.Schema(userSchema));