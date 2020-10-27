import React from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Home from '../containers/Home.js';
import About from '../containers/About.js';

class AppRouter extends React.Component{
    render(){
        return (
            <Router>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
            </Router>
        )
    }
}

export default AppRouter;