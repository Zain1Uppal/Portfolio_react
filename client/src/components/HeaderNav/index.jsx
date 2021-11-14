import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import './style.css'

export const Headernav = () => {
    const history = useHistory()
    return(
        <>
            <h1>Zain's Portfolio</h1>
            <nav>
                <NavLink className='home-link' to='/'>About</NavLink>
                <NavLink activeClassName='active' to='/Github'>Github</NavLink>
                <button onClick={history.goBack}>back</button>
            </nav>
        </>
    )
}