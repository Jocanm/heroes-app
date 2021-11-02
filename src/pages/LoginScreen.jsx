import React from 'react'

const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        // history.push("/");
        history.replace('/')
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
