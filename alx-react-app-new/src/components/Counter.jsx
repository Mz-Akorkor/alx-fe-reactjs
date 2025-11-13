import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      textAlign: 'center',
      marginTop: '30px',
      padding: '20px',
      border: '2px solid #ccc',
      borderRadius: '8px',
      width: '250px',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>Counter App</h2>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Current Count: {count}</p>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          style={{ margin: '5px', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{ margin: '5px', padding: '10px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          style={{ margin: '5px', padding: '10px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;