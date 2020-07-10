import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({color}) => {

  return (
    <nav className="main-nav">
      <ul>
        <li className={color}><NavLink to="/traditional">Traditional</NavLink></li>
        <li className={color}><NavLink to="/blackgray">Black&Gray</NavLink></li>
        <li className={color}><NavLink to="/watercolor">Watercolor</NavLink></li>
        <li className={color}><NavLink to="/neotraditional">Neotraditional</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
