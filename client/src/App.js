import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Nav from '../src/components/Nav';
import Header from '../src/components/Header';
import Search from './pages/Search';
import Saved from './pages/Saved';


function App() {
    return (
        <div>
            <Router>
                <Nav />
                <Header />
                <Switch>
                    <Route exact path='/' component={Search} />
                    <Route exact path='/search' component={Search} />
                    <Route exact path='/saved' component={Saved} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
