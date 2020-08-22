import React, { useState } from 'react';
import './App.css';
import User from './User/User';

function App() {
  const [data, setData] = useState([
    { id: 1, name: 'Emma', points: 0 },
    { id: 2, name: 'James', points: 0 },
    { id: 3, name: 'Harry', points: 0 },
    { id: 4, name: 'Joy', points: 0 },
    { id: 5, name: 'Robert', points: 0 }
  ])

  function compare(a, b) {
    if (a.points === b.points) {
      return a.name > b.name ? 1 : -1;
    }
    return a.points < b.points ? 1 : -1;
  }

  const plus = id => incDec(id, 'plus');
  const minus = id => incDec(id, 'minus');

  const incDec = (id, type) => {
    const newData = data.map(obj => {
      if (obj.id === id && type === 'plus') {
        obj.points++;
      }
      if (obj.id === id && type === 'minus') {
        obj.points--;
      }
      return obj;
    })
    setData(newData)
  }

  return (
    <div className="App">
      <header className="App-header">
        Self rebalancing leaderboard
      </header>
      <div className="container">
        {
          data.sort(compare).map(obj => (
            <User
              id={obj.id}
              name={obj.name}
              points={obj.points}
              plus={plus}
              minus={minus}
              key={obj.name}>
            </User>
          ))
        }
      </div>
    </div>
  );
}

export default App;
