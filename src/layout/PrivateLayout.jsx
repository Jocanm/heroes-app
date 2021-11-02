import React from 'react'
import Navbar from '../components/Navbar'

const PrivateLayout = ({children}) => {
    return (
        <>
            <Navbar/>
            {children}
        </>
    )
}

export default PrivateLayout
