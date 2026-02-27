import React, { useState } from 'react';
import UserProfile from './UserProfile';

export default function UserApp() {
  const [userId, setUserId] = useState(1);

  const handleRefresh = () => {
    const randomId = Math.floor(Math.random() * 10) + 1;
    setUserId(randomId);
  };

  return (
    <div>
      <h2>Task 2: User Profile API</h2>
      <div>
        <button onClick={() => setUserId(1)}>User 1</button>
        <button onClick={() => setUserId(2)}>User 2</button>
        <button onClick={() => setUserId(3)}>User 3</button>
        <button onClick={handleRefresh}>Refresh (Random User)</button>
      </div>
      
      <UserProfile userId={userId} />
    </div>
  );
}