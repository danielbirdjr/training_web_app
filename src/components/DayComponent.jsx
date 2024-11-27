import React, { useState, useEffect, useRef } from 'react';
import MuscleGroupComponent from './MuscleGroupComponent';
import { FiPlus, FiMoreHorizontal } from "react-icons/fi";

const DayComponent = ({ dayIndex, onDayChange, onDelete }) => {
    const [muscleGroups, setMuscleGroups] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
    const [customLabelMode, setCustomLabelMode] = useState(false);
    const [customLabel, setCustomLabel] = useState('');
    const [dayLabel, setDayLabel] = useState('Add label');
    const optionsRef = useRef(null);

    const handleAddMuscleGroup = () => {
        setMuscleGroups([...muscleGroups, { id: Date.now(), name: '', exercise: '' }]);
    };

    const handleDeleteMuscleGroup = (idToDelete) => {
        setMuscleGroups(muscleGroups.filter((muscleGroup) => muscleGroup.id !== idToDelete));
    };

    const handleMuscleGroupChange = (updatedMuscleGroup) => {
        setMuscleGroups(muscleGroups.map(mg => mg.id === updatedMuscleGroup.id ? updatedMuscleGroup : mg));
    };

    const handleCustomLabelChange = (e) => {
        setCustomLabel(e.target.value);
    };

    const handleSaveCustomLabel = () => {
        if (customLabel) {
            setDayLabel(customLabel);
            setCustomLabelMode(false);
            setShowOptions(false);
        }
    };

    const handleOutsideClick = (event) => {
        if (optionsRef.current && !optionsRef.current.contains(event.target)) {
            setShowOptions(false);
        }
    };

    useEffect(() => {
        if (showOptions) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [showOptions]);

    useEffect(() => {
        onDayChange(dayIndex, { dayLabel, muscleGroups });
    }, [dayLabel, muscleGroups]);

    return (
        <div className="day-component">
            <div className='day-component-top-menu'>
                <select 
                    className="day-label-dropdown"
                    value={dayLabel} 
                    onChange={(e) => setDayLabel(e.target.value)}
                >
                    <option>Add label</option>
                    <option>Sunday</option>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                </select>
                <div className="day_other_options" onClick={() => setShowOptions(!showOptions)} ref={optionsRef} >
                    <FiMoreHorizontal />
                    {showOptions && (
                        <div className="options-popup">
                            {!customLabelMode ? (
                                <>
                                    <button onClick={() => setCustomLabelMode(true)}>Custom label</button>
                                    <div className='popup-menu-line'></div>
                                    <button onClick={onDelete}>Delete day</button>
                                </>
                            ) : (
                                <div className="custom-label-input">
                                    <input 
                                        type="text" 
                                        value={customLabel} 
                                        onChange={handleCustomLabelChange} 
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                    <button onClick={handleSaveCustomLabel}>Save</button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            {muscleGroups.map((muscleGroup) => (
                <MuscleGroupComponent
                    key={muscleGroup.id}
                    muscleGroup={muscleGroup}
                    onDelete={() => handleDeleteMuscleGroup(muscleGroup.id)}
                    onMuscleGroupChange={handleMuscleGroupChange}
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
