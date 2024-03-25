const express = require('express');
const router = express.Router();
const Workout = require('../models/WorkoutModel'); 


router.post('/instance', async (req, res) => {
    try {
        // console.log(req)
        const newWorkout = new Workout({exercises:req.body});
        const savedWorkout = await newWorkout.save();
        console.log(savedWorkout)
        res.status(201).json(savedWorkout);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        // console.log('getk')
        const workouts = await Workout.find({}); 
        console.log(workouts)
        res.json(workouts);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
