import React, { useEffect, useReducer, useState } from 'react'
import { useHistory } from 'react-router'
import './App.css'
import { AuthContext } from './auth/AuthContext'
import authReducer from './auth/authReducer'
import { UsePath } from './auth/usePath'
import AppRouter from './routers/AppRouter'

const init = () => {

    return JSON.parse(localStorage.getItem('user')) || {
        logged: false
    }

}

const Main = ({history}) => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])



    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}

export default Main
