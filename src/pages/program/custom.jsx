import React, { useState } from 'react';
import withAuth from '../../hoc/withAuth';
import DayComponent from '../../components/DayComponent';
import AddDayButtonComponent from '../../components/AddDayButtonComponent';
import '../../styles/program/custom.css';

const CustomProgram = () => {
  const [days, setDays] = useState([{}]); // Start with two days by default

  const handleAddDay = () => {
    setDays([...days, {}]);
  };

  const handleDeleteDay = (index) => {
    const updatedDays = days.filter((_, i) => i !== index);
    setDays(updatedDays);
  };

  return (
    <div className="custom-program-creation-page">
      <div className="days-container">
        {days.map((_, index) => (
          <DayComponent key={index} onDelete={() => handleDeleteDay(index)} />
        ))}
        <AddDayButtonComponent onAddDay={handleAddDay} />
      </div>
    </div>
  );
};

export default withAuth(CustomProgram);
