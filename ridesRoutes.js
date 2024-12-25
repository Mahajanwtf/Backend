const express = require('express');
const router = express.Router();

// Sample data for rides
const rides = [
    { rideId: 1, distance: 10, fare: 25 },
    { rideId: 2, distance: 15, fare: 35 },
    { rideId: 3, distance: 20, fare: 45 },
];

// Handle GET request to /rides
router.get('/', (req, res) => {
    res.json(rides);
});

// Handle GET request to /rides/:rideId
router.get('/:rideId', (req, res) => {
    const rideId = parseInt(req.params.rideId, 10);
    const ride = rides.find((r) => r.rideId === rideId);

    if (ride) {
        res.json(ride);
    } else {
        res.status(404).json({ message: 'Ride not found' });
    }
});

module.exports = router;
