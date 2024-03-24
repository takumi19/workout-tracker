const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    exercises: [{
        exercise: String,
        sets: Number,
        reps: Number,
        weight: Number,
        RIR: Number
    }]
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
