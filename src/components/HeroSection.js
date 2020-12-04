import React, { useState, useEffect } from 'react';
import '../App.scss';
import './HeroSection.css';
import axios from 'axios';

function HeroSection() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")
  const [pending, setPending] = useState(true)

  useEffect(() => {
    const getQuote = () => {
      let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
  
      axios.get(url)
         .then(res =>  {
          const min = 0;
          const max = res.data.quotes.length;
          const rand = Math.round(min + Math.random() * (max - min));
          
          setQuote(res.data.quotes[rand].quote)
          setAuthor(res.data.quotes[rand].author)
          setPending(false)
         })
    }
    getQuote()
  }, [])

  return (
    <div className='hero-container'>
      <div>
        <h1 className="title">28 MOST COMMON EXERCISES ON LEETCODE.COM</h1>
        <p className="sentence">Remember, Practice Makes Perfect</p>
      </div>
      
      {!pending && 
        <div className="quote">
          <p>{quote}</p>
          <p>{author}</p>
        </div>      
      }
    </div>
  );
}

export default HeroSection;