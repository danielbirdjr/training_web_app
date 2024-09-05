import React, { useState } from 'react';

const DaysAndMuscleGroups = ({ onNext }) => {
  const [daysPerWeek, setDaysPerWeek] = useState(3);
  const [muscleGroups, setMuscleGroups] = useState([]);

  const muscleGroupOptions = ['Chest', 'Back', 'Legs', 'Arms', 'Shoulders', 'Core'];

  const handleDayChange = (e) => {
    setDaysPerWeek(e.target.value);
  };

  const handleMuscleGroupToggle = (group) => {
    setMuscleGroups((prev) =>
      prev.includes(group) ? prev.filter((g) => g !== group) : [...prev, group]
    );
  };

  const handleNext = () => {
    onNext({ daysPerWeek, muscleGroups });
  };

  return (
    <div className="days-muscle-groups">
      <h3>Select Days Per Week</h3>
      <input
        type="number"
        min="1"
        max="7"
        value={daysPerWeek}
        onChange={handleDayChange}
      />

      <h3>Select Muscle Groups</h3>
      {muscleGroupOptions.map((group) => (
        <label key={group}>
          <input
            type="checkbox"
            checked={muscleGroups.includes(group)}
            onChange={() => handleMuscleGroupToggle(group)}
          />
          {group}
        </label>
      ))}

      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default DaysAndMuscleGroups;
