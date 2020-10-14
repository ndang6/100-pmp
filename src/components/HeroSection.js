import React from 'react';
import '../App.scss';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>100 MOST COMMON EXERCISES ON LEETCODE.COM</h1>
      <p>Remember, Practice Makes Perfect</p>
      <div className='hero-btns'>
      {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          GET STARTED <i className='far fa-play-circle' />
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ALL QUESTIONS
        </Button>        */}
      </div>
    </div>
  );
}

export default HeroSection;