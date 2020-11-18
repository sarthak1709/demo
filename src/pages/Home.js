import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Button from '../components/Button';
import CCARDD from '../components/cards/CCARDD';

function Home() {
  return (
    <div className= 'column'>
      <Button />
    <div className='home'>
      <HeroSlider />
      </div>
      <div className='heading'>
        <h1><b>Our Results</b></h1>
      <CCARDD />
        </div>
    </div>
    
  );
}

export default Home;
