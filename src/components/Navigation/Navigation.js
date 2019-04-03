import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css'

function Navigation(props) {
  return (
    <ul className={classes.Navigation}>
      <li><NavLink
        activeClassName={classes.active}
        activeStyle={{color: 'black'}}
        to="/">Home</NavLink></li>
      <li><NavLink
        activeClassName={classes.active}
        to="/about">About</NavLink></li>
      <li><NavLink
        activeClassName={classes.active}
        to={{
        pathname: '/services',
        hash: 'bottom'
      }}>Services</NavLink></li>
    </ul>
  );
}

export default Navigation;