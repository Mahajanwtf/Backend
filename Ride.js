const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  rideID: { type: String, required: true, unique: true },
  distance: { type: Number, required: true },
  fare: { type: Number, required: true }
});

const Ride = mongoose.model('Ride', rideSchema);

module.exports = Ride;
