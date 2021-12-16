import React from 'react';
import './MenuItem.scss';

const MenuItem = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.imageUrl})` }}
      className={`${props.size} menu-item`}
    >
      <div className="container">
        <h1 className="title">{props.title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
