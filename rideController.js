const Ride = require('/models/Ride');

// Mock ride data for simplicity
const mockRides = [
  { rideID: '1', distance: 10, fare: 25 },
  { rideID: '2', distance: 15, fare: 30 },
  { rideID: '3', distance: 8, fare: 20 }
];

exports.listRides = (req, res) => {
  res.status(200).json(mockRides);
};

exports.rideDetails = (req, res) => {
  const ride = mockRides.find(r => r.rideID === req.params.id);
  if (ride) {
    res.status(200).json(ride);
  } else {
    res.status(404).json({ message: 'Ride not found' });
  }
};
