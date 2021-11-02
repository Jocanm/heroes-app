import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import PrivateLayout from '../layout/PrivateLayout';
import DcScreen from '../pages/DcScreen';
import HeroesScreen from '../pages/HeroesScreen'
import LoginScreen from '../pages/LoginScreen';
import MarvelScreen from '../pages/MarvelScreen';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>

                    <Route path={["/login"]}>
                        <Switch>

                            <Route path="/login" component={LoginScreen} />

                        </Switch>
                    </Route>

                    <Route path={["/marvel", "/heroe/:heroeId", "/dc", "/"]} >
                        <PrivateLayout>

                            <Switch>
                                <Route path="/marvel" component={MarvelScreen} />
                                <Route path="/heroe/:heroeId" component={HeroesScreen} />
                                <Route path="/dc" component={DcScreen} />
                                <Redirect to="/marvel" />
                            </Switch>

                        </PrivateLayout>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
// {/* <Switch>
//     <Route exact path="/login" component={ LoginScreen } />
//     <Route exact path="/" component={ DashboardRoutes } />
// </Switch> */}

export default AppRouter
