import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Page1 from './components/pages/Page1'
import Page2 from './components/pages/Page2'
import TwoSum from './components/questions/TwoSum'
import AddTwoNumbers from './components/questions/AddTwoNumbers'
import TrappingRainWater from './components/questions/TrappingRainWater';
import NumberOfIslands from './components/questions/NumberOfIslands';
import ReorderDataInLogFiles from './components/questions/ReorderDataInLogFiles';
import LruCache from './components/questions/LruCache';
import LongestPalindromicSubstring from './components/questions/LongestPalindromicSubstring';

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/page1' exact component={Page1} />
          <Route path='/page2' exact component={Page2} />
          <Route path='/page2/two-sum' exact component={TwoSum} />
          <Route path='/page2/add-two-numbers' exact component={AddTwoNumbers} />
          <Route path='/page2/number-of-islands' exact component={NumberOfIslands} />
          <Route path='/page2/trapping-rain-water' exact component={TrappingRainWater} />
          <Route path='/page2/reorder-data-in-log-files' exact component={ReorderDataInLogFiles} />
          <Route path='/page2/lru-cache' exact component={LruCache} />
          <Route path='/page2/longest-palindromic-substring' exact component={LongestPalindromicSubstring} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
