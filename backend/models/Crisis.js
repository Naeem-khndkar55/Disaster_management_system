const mongoose = require('mongoose');

const crisisSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String },
    severity: { type: String, enum: ['low', 'medium', 'high'], required: true },
    requiredHelp: { type: String },
    status: { type: String, enum: ['pending', 'approved', 'resolved'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Crisis', crisisSchema);