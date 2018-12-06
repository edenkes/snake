import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState ={};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    // window.devToolsExtension && window.devToolsExtension(),
    compose(applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )

);

export default store;