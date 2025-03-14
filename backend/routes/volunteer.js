const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all volunteers
router.get('/', async (req, res) => {
    try {
        const volunteers = await User.find({ role: 'volunteer' });
        res.json(volunteers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;