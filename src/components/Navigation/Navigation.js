import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to={{
        pathname: '/services',
        hash: 'elaman'
      }}>Services</Link></li>
    </ul>
  );
}

export default Navigation;