const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String },
    role: { type: String, enum: ['admin', 'volunteer'], default: 'volunteer' },
    assignedTask: { type: String },
    assignedLocation: { type: String }
});

module.exports = mongoose.model('User', userSchema);