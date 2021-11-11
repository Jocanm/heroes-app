import React from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import { types } from '../types/types'

const Navbar = () => {

    const {user,dispatch} = useAuth()

    const history = useHistory()

    const handleLogout = () => {

        history.replace("/login")
        
        dispatch({
            type:types.logout
        })

    }

    return (
        <nav className="flex justify-between bg-trueGray-700 py-4 px-6 text-white">

            <div className="flex justify-between">
                <Link
                    className="font-semibold text-lg relative home-link"
                    to="/"
                >
                    Asociaciones
                </Link>

                <div className="flex justify-between ml-10 ">
                    <NavLink
                        activeClassName="opacity-100 font-semibold"
                        className="mr-4 opacity-70"
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        activeClassName="opacity-100 font-semibold"
                        className="mr-4 opacity-70"
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        activeClassName="opacity-100 font-semibold"
                        className="opacity-70"
                        exact
                        to="/search"
                    >
                        <i className="fas fa-search"></i>
                    </NavLink>
                </div>
            </div>

            <div className="opacity-70">
                <span 
                className="mr-6 opacity-100 text-blue-500 font-bold bg-warmGray-100 rounded-lg px-3 py-1">
                    {user.name}
                </span>
                <button
                onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </nav>
    )
}

export default Navbar
