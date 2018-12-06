import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import AdvertisersList from './components/AdvertisersList';
import DomainModal from './components/DomainModal'
import Header from './components/Header'
import {Provider} from 'react-redux';
import store from './store';
import {Container} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <AppNavbar/>
                    <Container>
                        <Header />
                        <DomainModal />
                        <AdvertisersList/>
                    </Container>
                </div>
            </Provider>
        );
    }
}

export default App;
