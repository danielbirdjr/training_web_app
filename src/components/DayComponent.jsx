import React, { useState } from 'react';
import MuscleGroupComponent from './MuscleGroupComponent';
import { FiPlus } from "react-icons/fi";
import { FiMoreHorizontal } from "react-icons/fi";

const DayComponent = ({ onDelete }) => {
    const [muscleGroups, setMuscleGroups] = useState([]);

    const handleAddMuscleGroup = () => {
        setMuscleGroups([...muscleGroups, {}]);
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
            {muscleGroups.map((_, index) => (
                <MuscleGroupComponent key={index} />
            ))}
            <button onClick={handleAddMuscleGroup} className='add-muscle-group-component'>
                <FiPlus className='add-muscle-group-icon'/>
                Add muscle group
            </button>
        </div>
    );
};

export default DayComponent;
