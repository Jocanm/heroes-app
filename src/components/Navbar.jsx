import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
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
                <NavLink
                exact
                to="/login"
                >
                    Logout
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar
