import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import './Sidebar.css'

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        La Casa
      </a>
      <a className="menu-item" href="/Historia">
        Historia
      </a>
      <a className="menu-item" href="/Reservas">
        Reservas
      </a>
      <a className="menu-item" href="/Contacto">
        Contacto
      </a>
    </Menu>
  );
};