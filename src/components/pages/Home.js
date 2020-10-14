import React, { useContext } from 'react';
import '../../App.scss';
import HeroSection from '../HeroSection';
import { AuthContext } from './Auth'

function Home() {
  const { currentUser } = useContext(AuthContext);

  // if(currentUser){
  //   console.log("Logged In, from Home");
  // }

  return (
    <>
      <HeroSection />
    </>
  );
}

export default Home;