import React from 'react';
import withAuth from '../hoc/withAuth'; 
import '../styles/workout.css';

const Workout = () => {
  return (
    <div>
      <h1>Workout Page</h1>
    </div>
  );
};

export default withAuth(Workout); 