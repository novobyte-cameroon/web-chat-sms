import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './index.scss';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Message1 from "./components/chat/Message1";
import Message from "./components/chat/Message";
import {Provider} from "react-redux";
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <div>
            <Route exact path="/"><App /></Route>
            <Route exact path="/message"><Message1 /></Route>
        </div>
    </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
