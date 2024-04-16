import React from 'react';
import HomePageImg from '../assets/HomePageImg.png'


const StartPage = ({handleClick}) => {


  return (
    
    <div className="start-box">
        

      <div className='container'>
        <div className="text-box">
          <h1>Code, React, Quiz :</h1>
          <h3>Test Your Skills, Uncover New Frontiers!</h3>
        </div>
        <button className="start-btn" onClick={handleClick}>
          Start
        </button>
      </div>

      <img src={HomePageImg} />


    </div>
  );
}


export default StartPage