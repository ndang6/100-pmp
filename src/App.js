import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Page1 from './components/pages/Page1'
import Page2 from './components/pages/Page2'
import TwoSum from './components/questions/TwoSum'
import AddTwoNumbers from './components/questions/AddTwoNumbers'
import trappingRainWater from './components/questions/trappingRainWater';
import numberOfIslands from './components/questions/numberOfIslands';

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/page1' exact component={Page1} />
          <Route path='/page2' exact component={Page2} />
          <Route path='/two-sum' exact component={TwoSum} />
          <Route path='/add-two-numbers' exact component={AddTwoNumbers} />
          <Route path='/number-of-islands' exact component={numberOfIslands} />
          <Route path='/trapping-rain-water' exact component={trappingRainWater} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
