import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import SearchScreen from '../components/SearchScreen';
import PrivateLayout from '../layout/PrivateLayout';
import DcScreen from '../pages/DcScreen';
import HeroesScreen from '../pages/HeroesScreen'
import LoginScreen from '../pages/LoginScreen';
import MarvelScreen from '../pages/MarvelScreen';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>

                    <Route path={["/login"]}>
                        <PublicRoute>
                            <Switch>

                                <Route path="/login" component={LoginScreen} />

                            </Switch>
                        </PublicRoute>
                    </Route>

                    <Route path={["/marvel", "/heroe/:heroeId", "/dc", "/"]} >
                        <PrivateRoute>
                            <PrivateLayout>

                                <Switch>
                                    <Route path="/marvel" component={MarvelScreen} />
                                    <Route path="/hero/:heroeId" component={HeroesScreen} />
                                    <Route path="/dc" component={DcScreen} />
                                    <Route path="/search" component={SearchScreen} />
                                    <Redirect to="/marvel" />
                                </Switch>

                            </PrivateLayout>
                        </PrivateRoute>
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
