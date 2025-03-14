const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    type: { type: String, enum: ['relief', 'expense'], required: true },
    itemName: { type: String, required: true },
    quantity: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inventory', inventorySchema);