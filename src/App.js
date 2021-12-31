import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tubercolusis from './components/pages/Tubercolusis';
import Heart from './components/pages/Heart';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/tubercolusis' component={Tubercolusis} />
          <Route path='/heart' component={Heart} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
