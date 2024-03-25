import React, { useState  } from 'react';
import './App.css';
import Button from './components/Button';
import WorkoutTable from './components/WorkoutTable';

function App() {
  const [showTable, setShowTable] = useState(false);
  const [workouts, setWorkouts] = useState([]); 

  const handleNewClick = () => {
    setWorkouts([]); 
    setShowTable(true); 
  };

  const handleLoadClick = async () => {
    try {
      const response = await fetch('/api/workouts'); 
      const data = await response.json();
      setWorkouts(data); 
      setShowTable(true); 
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
        
        <WorkoutTable workouts={workouts} onBack={() => setShowTable(false)} />
      )}
    </div>
  );
}

export default App;
