import React from 'react';
import withAuth from '../hoc/withAuth'; 
import '../styles/profile.css';

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
};

export default withAuth(Profile); 