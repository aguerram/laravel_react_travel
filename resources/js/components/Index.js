import Main from './Main/Main'

import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import ReactDOM from 'react-dom'
import React from 'react';

if (document.getElementById('app')) {
    ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact component={Main}/>
        </Switch>
    </Router>,
    document.getElementById('app'));
}