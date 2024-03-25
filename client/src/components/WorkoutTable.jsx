import React, { useRef } from 'react';
import './Button.css';
import './WorkoutTable.css';

const WorkoutTable = ({ onBack, workouts }) => {
    const tableRef = useRef(); 

    const handleSave = async () => {
        const tableRows = tableRef.current.querySelectorAll("tbody tr");
        const workoutData = Array.from(tableRows).map(row => {
            return {
                exercise: row.cells[0].querySelector("input").value,
                sets: row.cells[1].querySelector("input").value,
                reps: row.cells[2].querySelector("input").value,
                weight: row.cells[3].querySelector("input").value,
                RIR: row.cells[4].querySelector("input").value
            };
        });

        try {

            console.log(JSON.stringify({  workoutData }))
            const response = await fetch('http://localhost:3001/api/workouts/instance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( workoutData), 
                mode: 'cors'
            });

            if (response.ok) {
                alert('Workout saved successfully');
                onBack(); 
            } else {
                alert('FAiled to save workout');
            }
        } catch (error) {
            console.error("Failed to save workout", error);
            alert('Failed to save workouT');
        }
    };

    const renderRows = () => {
        if (workouts && workouts.length > 0) {
            return workouts.map((workout, index) => (
                <tr key={index}>
                    <td><input type="text" value={workout.exercise} readOnly /></td>
                    <td><input type="number" value={workout.sets} readOnly /></td>
                    <td><input type="number" value={workout.reps} readOnly /></td>
                    <td><input type="number" value={workout.weight} readOnly /></td>
                    <td><input type="number" value={workout.RIR} readOnly /></td>
                </tr>
            ));
        }
        return Array.from({ length: 10 }).map((_, index) => (
            <tr key={index}>
                <td><input type="text" /></td>
                <td><input type="number" /></td>
                <td><input type="number" /></td>
                <td><input type="number" /></td>
                <td><input type="number" /></td>
            </tr>
        ));
    };

    return (
        <div className="workout-table-container">
            {/* <h2>Workout</h2> */}
            <table className="workout-table" ref={tableRef}>
                <thead>
                    <tr>
                        <th>Exercise</th>
                        <th>Sets</th>
                        <th>Reps</th>
                        <th>Weight</th>
                        <th>RIR</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
            <div className="workout-table-actions">
                <button className="pretty-button" onClick={handleSave}>Save</button>
                <button className="pretty-button" onClick={onBack}>Back</button>
            </div>
        </div>
    );
};

export default WorkoutTable;
