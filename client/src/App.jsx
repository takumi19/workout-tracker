import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import WorkoutTable from './components/WorkoutTable';

function App() {
  const [showTable, setShowTable] = useState(false);
  const [workouts, setWorkouts] = useState([]); // State to hold loaded workout data

  const handleNewClick = () => {
    setWorkouts([]); // Ensure workouts is empty for new entries
    setShowTable(true); // Show the table for new workout entry
  };

  const handleLoadClick = async () => {
    try {
      const response = await fetch('/api/workouts'); // Adjust the URL as necessary
      const data = await response.json();
      setWorkouts(data); // Load data into state
      setShowTable(true); // Show the table with loaded data
    } catch (error) {
      console.error("Failed to fetch workouts", error);
    }
  };

  return (
    <div className="App">
      {!showTable ? (
        <>
          <Button text="New" onClick={handleNewClick} />
          <Button text="Load" onClick={handleLoadClick} />
        </>
      ) : (
        // Pass the workouts state as a prop to the WorkoutTable
        <WorkoutTable workouts={workouts} onBack={() => setShowTable(false)} />
      )}
    </div>
  );
}

export default App;
