import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Challenge from './components/pages/Challenge'
import Questions from './components/pages/Questions'
import TwoSum from './components/questions/TwoSum'
import AddTwoNumbers from './components/questions/AddTwoNumbers'
import TrappingRainWater from './components/questions/TrappingRainWater';
import NumberOfIslands from './components/questions/NumberOfIslands';
import ReorderDataInLogFiles from './components/questions/ReorderDataInLogFiles';
import LruCache from './components/questions/LruCache';
import LongestPalindromicSubstring from './components/questions/LongestPalindromicSubstring';
import { AuthProvider } from './components/pages/Auth';
import SignUp from './components/pages/SignUp';
import PrivateRoute from './components/pages/PrivateRoute';
import { projectFirestore } from './firebase';

// import { projectFirestore } from './firebase';
// var namesComplete = ["Two Sum", "Add Two Numbers", "Number Of Islands", "Trapping Rain Water", "Reorder Data in Log Files", "LRU Cache", "Longest Palindromic Substring"]

// projectFirestore.collection('marks').add(
//   {
//     title: "Longest Palindromic Substring",
//     reviewed: false
//   },
// )

function App() {

  return (
    <AuthProvider>
      <Router>
        <Navbar></Navbar>
        <div>
          <Route path='/' exact component={Home}/>
          <Route path='/signup' exact component={SignUp} />

          <PrivateRoute path='/challenge' exact component={Challenge} />
          <Route path='/questions' exact component={Questions} />
          <Route path='/questions/two-sum' exact component={TwoSum} />
          <Route path='/questions/add-two-numbers' exact component={AddTwoNumbers} />
          <Route path='/questions/number-of-islands' exact component={NumberOfIslands} />
          <Route path='/questions/trapping-rain-water' exact component={TrappingRainWater} />
          <Route path='/questions/reorder-data-in-log-files' exact component={ReorderDataInLogFiles} />
          <Route path='/questions/lru-cache' exact component={LruCache} />
          <Route path='/questions/longest-palindromic-substring' exact component={LongestPalindromicSubstring} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
