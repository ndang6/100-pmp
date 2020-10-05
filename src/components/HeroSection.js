import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>100 MOST COMMON LEETCODE QUESTIONS</h1>
      <p>Remember, Practice Makes Perfect (PMP)</p>
      <div className='hero-btns'>
      <Button
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
          TRANING FIRST
        </Button>       
      </div>
    </div>
  );
}

export default HeroSection;