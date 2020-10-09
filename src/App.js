import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Page1 from './components/pages/Page1'
import Page2 from './components/pages/Page2'
import TwoSum from './components/questions/TwoSum'
import addTwoNumbers from './components/questions/addTwoNumbers'
import trappingRainWater from './components/questions/trappingRainWater';
import numberOfIslands from './components/questions/numberOfIslands';
import reorderDataInLogFiles from './components/questions/reorderDataInLogFiles';
import lruCache from './components/questions/lruCache';

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
          <Route path='/add-two-numbers' exact component={addTwoNumbers} />
          <Route path='/number-of-islands' exact component={numberOfIslands} />
          <Route path='/trapping-rain-water' exact component={trappingRainWater} />
          <Route path='/reorder-data-in-log-files' exact component={reorderDataInLogFiles} />
          <Route path='/lru-cache' exact component={lruCache} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
