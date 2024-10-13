const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize the app
const app = express();

// Middleware
app.use(cors());  // Enable CORS to allow communication from React frontend
app.use(bodyParser.json());  // Parse incoming JSON requests

// Connect to MongoDB
mongoose.connect('mongodb+srv://thefoodnetwork:intelsucks123@foodnetwork.pbc7n.mongodb.net/?retryWrites=true&w=majority&appName=FoodNetwork', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Define User Schema and Model
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Route for user sign-up
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  // Create a new user
  const newUser = new User({
    email,
    password  // Store password directly as plain text
  });

  // Save the user to the database
  await newUser.save();

  res.status(201).json({ message: 'User created successfully' });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
