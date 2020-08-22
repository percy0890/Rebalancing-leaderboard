import React from 'react';
import './User.css';

function User(props) {
  const { id, name, points, plus, minus } = props;
  return (
    <div className="user">
      <div className="item right-align">{name}</div>
      <div className="item">
        <button onClick={() => plus(id)}>+</button>
      </div>
      <div className="item left-align">
        <button onClick={() => minus(id)}>-</button>
      </div>
      <div className="item">{points} points</div>
    </div>
  );
}

export default User;
