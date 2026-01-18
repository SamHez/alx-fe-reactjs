import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Current Count: {count}</p>
            <button
                onClick={() => setCount(count + 1)}
                style={{ padding: '10px 20px', margin: '5px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
                Increment
            </button>
            <button
                onClick={() => setCount(count - 1)}
                style={{ padding: '10px 20px', margin: '5px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
                Decrement
            </button>
            <button
                onClick={() => setCount(0)}
                style={{ padding: '10px 20px', margin: '5px', backgroundColor: '#2196f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
                Reset
            </button>
        </div>
    );
}

export default Counter;
