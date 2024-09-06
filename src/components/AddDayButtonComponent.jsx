import React from 'react';
import { FiPlus } from "react-icons/fi";

const AddDayButtonComponent = ({ onAddDay }) => {
  return (
    <button className="add-day-button" onClick={onAddDay}>
      <FiPlus />Add a day
    </button>
  );
};

export default AddDayButtonComponent;
