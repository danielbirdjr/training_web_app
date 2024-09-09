import React, { useState } from 'react';
import MuscleGroupComponent from './MuscleGroupComponent';
import { FiPlus } from "react-icons/fi";
import { FiMoreHorizontal } from "react-icons/fi";

const DayComponent = () => {
    const [muscleGroups, setMuscleGroups] = useState([]);

    const handleAddMuscleGroup = () => {
        setMuscleGroups([...muscleGroups, { id: Date.now() }]); // Assign a unique ID to each muscle group
    };

    const handleDeleteMuscleGroup = (idToDelete) => {
        setMuscleGroups(muscleGroups.filter((muscleGroup) => muscleGroup.id !== idToDelete));
    };

    return (
        <div className="day-component">
            <div className='day-component-top-menu'>
                <select className="day-label-dropdown">
                    <option>Add label</option>
                    <option>Sunday</option>
                    <option>Monday</option>
                    <option>Tueday</option>
                    <option>Wedday</option>
                    <option>Thurday</option>
                    <option>Friday</option>
                    <option>Satday</option>
                </select>
                <div className="day_other_options">
                    <FiMoreHorizontal />
                </div>
            </div>
            {muscleGroups.map((muscleGroup) => (
                <MuscleGroupComponent
                    key={muscleGroup.id}
                    onDelete={() => handleDeleteMuscleGroup(muscleGroup.id)}
                />
            ))}
            <button onClick={handleAddMuscleGroup} className='add-muscle-group-component'>
                <FiPlus className='add-muscle-group-icon'/>
                Add muscle group
            </button>
        </div>
    );
};

export default DayComponent;
