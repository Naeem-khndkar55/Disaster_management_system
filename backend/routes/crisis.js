const express = require('express');
const router = express.Router();
const Crisis = require('../models/Crisis');

// Add crisis (anonymous)
router.post('/', async (req, res) => {
    try {
        const crisis = new Crisis(req.body);
        await crisis.save();
        res.status(201).json(crisis);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all crises
router.get('/', async (req, res) => {
    try {
        const crises = await Crisis.find();
        res.json(crises);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;