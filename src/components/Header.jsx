import React from 'react';
import HeaderImg from '../assets/HeaderImg.png'

const Header = () => {
  return (
    <header>
      <img
        src={HeaderImg}
        alt="quizImg"
      />
      <h1>ReactQuiz</h1>
    </header>
  );
}

export default Header