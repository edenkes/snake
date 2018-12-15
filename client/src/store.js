import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import createHistory from "history/createBrowserHistory";
import {  routerMiddleware } from "react-router-redux";


const initialState ={};

const middlewareThunk = [thunk];

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middlewareRouter = routerMiddleware(history);

const store = createStore(
    rootReducer,
    initialState,
    // applyMiddleware(middleware)
    compose(applyMiddleware(...middlewareThunk, middlewareRouter),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;