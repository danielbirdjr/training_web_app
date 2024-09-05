import React from 'react';
import withAuth from '../hoc/withAuth'; 
import '../styles/program.css';

const Program = () => {
  return (
    <div>
      <h1>Program Page</h1>
    </div>
  );
};

export default withAuth(Program); 