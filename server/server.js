const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/workoutRoutes');
const cors = require('cors')
const app = express();

app.use(cors())

app.use(express.json()); 


app.use('/api/workouts', router);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));


mongoose.connect('mongodb://localhost:27017/workoutTracker', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));