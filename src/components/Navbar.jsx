import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="flex justify-between bg-trueGray-700 py-4 px-6 text-white">

            <div className="flex justify-between">
                <Link
                    className="font-semibold text-lg relative bottom-1"
                    to="/"
                >
                    Asociaciones
                </Link>

                <div className="flex justify-between ml-10 opacity-70">
                    <NavLink
                        className="mr-4"
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        exact
                        to="/dc"
                    >
                        DC
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
