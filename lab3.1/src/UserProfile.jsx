import React, { useState, useEffect } from 'react';

export default function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // EXPLANATION COMMENT:
  // userId is in the dependency array because the effect needs to re-run
  // whenever the parent passes a new userId. 
  // The cleanup function (controller.abort) runs when the component unmounts
  // or right before the next effect runs, preventing memory leaks and race conditions.
  useEffect(() => {
    const controller = new AbortController();
    
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
          signal: controller.signal
        });
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setUser(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    // Cleanup function
    return () => controller.abort();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (!user) return null;

  return (
    <div style={{ padding: '10px', background: '#f0f0f0' }}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}