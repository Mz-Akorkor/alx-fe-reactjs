import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '15px',
      margin: '20px auto',
      width: '300px',
      borderRadius: '8px',
      textAlign: 'center',
      backgroundColor: '#f9f9f9'
    }}>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserDetails;