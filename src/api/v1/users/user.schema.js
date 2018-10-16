const mongoose = require('mongoose');
const userSchema = {
    name: { type: String, required: true, unique: true, lowercase: true, trim: true },
    pwd: { type: String, required: true, trim: true },
    created_at: { type: Date, default: Date.now }
};

module.exports = mongoose.model('User', new mongoose.Schema(userSchema));