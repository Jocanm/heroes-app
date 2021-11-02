import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Navbar from '../components/Navbar';
import LoginScreen from '../pages/LoginScreen';
import MarvelScreen from '../pages/MarvelScreen';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar/>

                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />
                    <Route exact path="/" component={ MarvelScreen } />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
