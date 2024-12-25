const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); 
const ridesRoutes = require('./routes/ridesRoutes'); 

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB 
mongoose.connect('mongodb://127.0.0.1:27017/backend-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// User registration route
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  //return a success message
  res.status(201).json({ message: "User registered successfully" });
});

// Use the user and rides routes
app.use('/api/users', userRoutes);
app.use('/api/rides', ridesRoutes); 

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
