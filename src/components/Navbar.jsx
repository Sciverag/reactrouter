import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
          <ul>
          <li>
              <NavLink to='/'> Inicio </NavLink>
            </li>
            <li>
              <NavLink to='/Nosotros'> Nosotros </NavLink>
            </li>
            <li>
              <NavLink to='/Contacto'> Contacto </NavLink>
            </li>
            <li>
              <NavLink to='/Dashboard'> Dashboard </NavLink>
            </li>
          </ul>

        </div>

    )
}