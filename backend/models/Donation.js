const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    donorName: { type: String },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donation', donationSchema);