const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');  // Import controller functions

// Route for registering a user
router.post('/register', userController.registerUser);

// Route for getting all users
router.get('/', userController.getUsers);

module.exports = router;
