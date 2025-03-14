const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory');
const auth = require('../middleware/auth');

// Add inventory item (volunteer/admin only)
router.post('/', auth, async (req, res) => {
    try {
        const inventory = new Inventory(req.body);
        await inventory.save();
        res.status(201).json(inventory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get inventory
router.get('/', auth, async (req, res) => {
    try {
        const inventory = await Inventory.find();
        res.json(inventory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;