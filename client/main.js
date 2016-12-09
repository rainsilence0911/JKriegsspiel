import React from "react";

import ReactDom from "react-dom";

import App from "./js/container/App";
import Login from "./js/container/Login";
import PlayGround from "./js/container/PlayGround";

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

var container = document.getElementById("container");

ReactDom.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Login}/>
           	<Route path="play" component={PlayGround}/>
        </Route>
    </Router>
), container);
