import React, { useEffect } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'

const PrivateRoute = ({children}) => {

    const location = useHistory()

    const {user} = useAuth()

    useEffect(()=>{
        console.log(location)
    },[location])

    if(user.logged){
        return children
    }else{
        return <Redirect to = "/login"/>
    }
}

export default PrivateRoute
