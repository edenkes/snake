import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';

import {Provider} from 'react-redux';
import store from './store';

import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

// import AdvertisersList from './components/AdvertisersList';
// import DomainModal from './components/DomainModal'
// import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import PageNotAvailable from './components/PageNotAvailable'

import createHistory from "history/createBrowserHistory";
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div className="App">
                        <AppNavbar/>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/search=:website" component={Home}/>
                            <Route path="/About" component={About}/>
                            <Route component={PageNotAvailable}/>
                        </Switch>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
