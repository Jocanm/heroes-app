import React from 'react'
import { useAuth } from '../auth/AuthContext'
import { types } from '../types/types'

const LoginScreen = ({ history }) => {

    const {dispatch} = useAuth()
    const route = localStorage.getItem('path')

    const handleLogin = () => {
        // history.push("/");
        // Con replace no se guarda en el historial de nevegación
        // history.replace('/')
        
        dispatch({
            type:types.login,
            payload:{
                name:"Jose"
            }
        })

        if(route) history.replace(route)
        else history.replace("/")

    }

    return (
        <div className="m-14">
            <h1 className="text-4xl font-semibold mb-2">Login</h1>
            <hr />

            <button 
            className="bg-amber-600 mt-6 px-7 py-2 rounded-md text-white hover:shadow-lg hover:bg-amber-700"
            onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}

export default LoginScreen
