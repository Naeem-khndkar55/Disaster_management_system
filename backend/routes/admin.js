const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const Crisis = require('../models/Crisis');
const Donation = require('../models/Donation');
const Inventory = require('../models/Inventory');

// Middleware to check admin role
const adminAuth = async (req, res, next) => {
    if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Admin access required' });
    next();
};

// Approve crisis
router.put('/crisis/:id', auth, adminAuth, async (req, res) => {
    try {
        const crisis = await Crisis.findByIdAndUpdate(req.params.id, 
            { status: req.body.status, severity: req.body.severity }, 
            { new: true }
        );
        res.json(crisis);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Assign volunteer
router.put('/volunteer/:id', auth, adminAuth, async (req, res) => {
    try {
        const volunteer = await User.findByIdAndUpdate(req.params.id, 
            { assignedTask: req.body.task, assignedLocation: req.body.location }, 
            { new: true }
        );
        res.json(volunteer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Generate reports (simplified - you'd need to add CSV/Excel export logic)
router.get('/report/:type', auth, adminAuth, async (req, res) => {
    try {
        let report;
        switch(req.params.type) {
            case 'donation':
                report = await Donation.find();
                break;
            case 'expense':
                report = await Inventory.find({ type: 'expense' });
                break;
            case 'inventory':
                report = await Inventory.find();
                break;
            default:
                return res.status(400).json({ msg: 'Invalid report type' });
        }
        res.json(report);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;