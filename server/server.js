const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workoutRoutes');
const app = express();

// Middleware
app.use(express.json()); // for parsing application/json

// Routes
app.use('/api/workouts', workoutRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// Database connection
mongoose.connect('mongodb://localhost:27017/workoutTraacker', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));