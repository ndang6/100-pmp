import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { AuthProvider } from './components/pages/Auth';
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
import SignUp from './components/pages/SignUp';
import PrivateRoute from './components/pages/PrivateRoute';
import DecodeWays from './components/questions/DecodeWays';
import LongestSubstringWithoutRepeatingCharacters from './components/questions/LongestSubstringWithoutRepeatingCharacters';
import MaximumSubarray from './components/questions/MaximumSubarray';
import ConsecutiveNumbersSum from './components/questions/ConsecutiveNumbersSum';
import MedianOfTwoSortedArrays from './components/questions/MedianOfTwoSortedArrays';
import MergeTwoSortedLists from './components/questions/MergeTwoSortedLists';
import ThreeSum from './components/questions/ThreeSum';
import PartitionLabels from './components/questions/PartitionLabels';
import TreeTraversal from './components/concepts/TreeTraversal';
import GraphTraversal from './components/concepts/GraphTraversal';
import ProductOfArrayExceptSelf from './components/questions/ProductOfArrayExceptSelf';
import ValidParentheses from './components/questions/ValidParentheses';
import MergeIntervals from './components/questions/MergeIntervals';
import BestTimeToBuyAndSellStock from './components/questions/BestTimeToBuyAndSellStock';
import MergeKSortedLists from './components/questions/MergeKSortedLists';
import VerifyingAnAlienDictionary from './components/questions/VerifyingAnAlienDictionary';
import IntegerToEnglishWords from './components/questions/IntegerToEnglishWords';
import ReverseLinkedList from './components/questions/ReverseLinkedList';
import DecodeString from './components/questions/DecodeString';
import NextPermutation from './components/questions/NextPermutation';
import WordBreak from './components/questions/WordBreak';
import SubarraySumEqualsK from './components/questions/SubarraySumEqualsK';
import KClosestPointsToOrigin from './components/questions/KClosestPointsToOrigin';
import Fibonacci from './components/concepts/Fibonacci';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar></Navbar>
        
        <div>
          {/* 4 pages */}
          <Route path='/' exact component={Home}/>
          <PrivateRoute path='/challenge' exact component={Challenge} />
          <Route path='/questions' exact component={Questions} />
          <Route path='/signup' exact component={SignUp} />

           {/* all the questions */}  
          <Route path='/questions/two-sum' exact component={TwoSum} />
          <Route path='/questions/add-two-numbers' exact component={AddTwoNumbers} />
          <Route path='/questions/number-of-islands' exact component={NumberOfIslands} />
          <Route path='/questions/trapping-rain-water' exact component={TrappingRainWater} />
          <Route path='/questions/reorder-data-in-log-files' exact component={ReorderDataInLogFiles} />
          <Route path='/questions/lru-cache' exact component={LruCache} />
          <Route path='/questions/longest-palindromic-substring' exact component={LongestPalindromicSubstring} />
          <Route path='/questions/decode-ways' exact component={DecodeWays} />
          <Route path='/questions/longest-substring-without-repeating-characters' exact component={LongestSubstringWithoutRepeatingCharacters} />
          <Route path='/questions/maximum-subarray' exact component={MaximumSubarray} />
          <Route path='/questions/consecutive-numbers-sum' exact component={ConsecutiveNumbersSum} />
          <Route path='/questions/median-of-two-sorted-arrays' exact component={MedianOfTwoSortedArrays} />
          <Route path='/questions/merge-two-sorted-lists' exact component={MergeTwoSortedLists} />
          <Route path='/questions/3Sum' exact component={ThreeSum} />
          <Route path='/questions/partition-labels' exact component={PartitionLabels} />
          <Route path='/questions/product-of-array-except-self' exact component={ProductOfArrayExceptSelf} />
          <Route path='/questions/valid-parentheses' exact component={ValidParentheses} />
          <Route path='/questions/merge-intervals' exact component={MergeIntervals} />
          <Route path='/questions/best-time-to-buy-and-sell-stock' exact component={BestTimeToBuyAndSellStock} />
          <Route path='/questions/merge-k-sorted-lists' exact component={MergeKSortedLists} />
          <Route path='/questions/verifying-an-alien-dictionary' exact component={VerifyingAnAlienDictionary} />
          <Route path='/questions/integer-to-english-words' exact component={IntegerToEnglishWords} />
          <Route path='/questions/reverse-linked-list' exact component={ReverseLinkedList} />
          <Route path='/questions/decode-string' exact component={DecodeString} />
          <Route path='/questions/next-permutation' exact component={NextPermutation} />
          <Route path='/questions/word-break' exact component={WordBreak} />
          <Route path='/questions/subarray-sum-equals-k' exact component={SubarraySumEqualsK} />
          <Route path='/questions/k-closest-points-to-origin' exact component={KClosestPointsToOrigin} />
          {/* Premium Contents */}
          <Route path='/tree-traversal' exact component={TreeTraversal} />
          <Route path='/graph-traversal' exact component={GraphTraversal} />
          <Route path='/fibonacci' exact component={Fibonacci} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
