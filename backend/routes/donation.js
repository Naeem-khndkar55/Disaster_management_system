const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

// Add donation
router.post('/', async (req, res) => {
    try {
        const donation = new Donation(req.body);
        await donation.save();
        res.status(201).json(donation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all donations
router.get('/', async (req, res) => {
    try {
        const donations = await Donation.find();
        res.json(donations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;