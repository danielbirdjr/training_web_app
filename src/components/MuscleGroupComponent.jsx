import React from 'react';
import { FiTrash2 } from "react-icons/fi";

const MuscleGroupComponent = ({ onDelete }) => {
    return (
        <div className="muscle-group-and-exercise-component">
            <div className='muscle-group-and-delete-menu'>
                <select className="muscle-dropdown">
                    <option>Muscle group</option>
                    <option>Shoulders</option>
                    <option>Chest</option>
                    <option>Lats</option>
                    <option>Upper back</option>
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
            <select className="exercise-dropdown">
                <option>Select exercise</option>
                <option>Pull up</option>
                {/* Exercise options will be populated dynamically */}
            </select>
        </div>
    );
};

export default MuscleGroupComponent;
