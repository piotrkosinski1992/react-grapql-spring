import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import reducer from "./Store/reducers/reducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "./App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  app: reducer,
  // post: dataReducer
})

ReactDOM.render(
    <Provider store={createStore(rootReducer, composeEnhancers(
        applyMiddleware(thunk)
    ))}>
      <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
