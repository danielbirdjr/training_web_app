import React from 'react';
import { FiTrash2 } from "react-icons/fi";

const MuscleGroupComponent = ({ muscleGroup, onDelete, onMuscleGroupChange }) => {
    const handleMuscleChange = (e) => {
        onMuscleGroupChange({ ...muscleGroup, name: e.target.value });
    };

    const handleExerciseChange = (e) => {
        onMuscleGroupChange({ ...muscleGroup, exercise: e.target.value });
    };

    return (
        <div className="muscle-group-and-exercise-component">
            <div className='muscle-group-and-delete-menu'>
                <select className="muscle-dropdown" value={muscleGroup.name} onChange={handleMuscleChange}>
                    <option>Muscle group</option>
                    <option>Chest</option>
                    <option>Back</option>
                    <option>Shoulders</option>
                    <option>Biceps</option>
                    <option>Triceps</option>
                    <option>Quads</option>
                    <option>Hamstrings</option>
                    <option>Glutes</option>
                    <option>Calves</option>
                    <option>Abs</option>
                    <option>Forearms</option>
                    <option>Neck</option>
                </select>
                <FiTrash2 className='delete-exercise-component-icon' onClick={onDelete} />
            </div>
            <select className="exercise-dropdown"  value={muscleGroup.exercise} onChange={handleExerciseChange}>
                <option>Select exercise</option>
                <option>Incline Barbell Bench Press</option>
                <option>Pull up</option>
                <option>Squat</option>
                <option>RDL</option>
                <option>Seated DB Overhead Press</option>
                {/* Exercise options will be populated dynamically */}
            </select>
        </div>
    );
};

export default MuscleGroupComponent;
