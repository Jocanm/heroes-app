import React from 'react'
import { Redirect } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'

const PublicRoute = ({children}) => {

    const {user} = useAuth()
    if(user.logged){
        return <Redirect to="/"/>
    }else{
        return children;
    }

}

export default PublicRoute
