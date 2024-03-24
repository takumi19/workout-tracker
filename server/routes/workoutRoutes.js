const express = require('express');
const router = express.Router();
const Workout = require('../models/WorkoutModel'); // Assuming you've created this model

// POST route to save a workout
router.post('/', async (req, res) => {
    try {
        const newWorkout = new Workout(req.body);
        const savedWorkout = await newWorkout.save();
        res.status(201).json(savedWorkout);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const workouts = await Workout.find({}); // Fetch all workouts
        res.json(workouts);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
