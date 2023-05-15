import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navigation = () => {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    )
}