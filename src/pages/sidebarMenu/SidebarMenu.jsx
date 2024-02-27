import React from 'react'
import {  NavLink } from 'react-router-dom';

const SidebarMenu = () => {
  return (
        <ul>
            <li>
            <NavLink to="/" className={({isActive})=> (isActive ?'active' : '')}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/create-course" className={({isActive})=> (isActive ?'active' : '')}>create course</NavLink>
                
            </li>
            <li>
                <NavLink to="/users" className={({isActive})=> (isActive ?'active' : '')}>Users</NavLink>
                
            </li>
        </ul>

  )
}

export default SidebarMenu;