import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MarvelScreen from '../pages/MarvelScreen'
import HeroesScreen from '../pages/HeroesScreen'
import DcScreen from '../pages/DcScreen'

const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>

            <div>
                <Switch>

                    <Route exact path = "/marvel" component={MarvelScreen} />
                    
                    <Route exact path = "/heroe/:heroeId" component={ HeroesScreen } />

                    <Route exact path = "/dc" component={ DcScreen } />

                    <Redirect to="/marvel" />

                </Switch>
            </div>
        </>
    )
}

export default DashboardRoutes
