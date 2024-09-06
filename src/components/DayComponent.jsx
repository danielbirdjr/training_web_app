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
                    <option>Sun</option>
                    <option>Mon</option>
                    <option>Tue</option>
                    <option>Wed</option>
                    <option>Thur</option>
                    <option>Fri</option>
                    <option>Sat</option>
                </select>
                <div className="day_other_options">
                    <FiMoreHorizontal />
                </div>
                {/* <select className="day_other_options">
                    <FiMoreHorizontal />
                    <option>Custom name</option>
                    <option>Delete day</option>
                </select> */}
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
