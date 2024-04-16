import React from 'react';
import { useState,useCallback,useRef } from 'react';
import QUESTIONS from '../questions'
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
import Question from './Question';
import Summary from './Summary';

const Quiz = () => {

 

  
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer=useCallback((selectedAnswer) =>{

    
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });

    
  },[])

  const handleSkipAnswer=useCallback(()=>
    handleSelectAnswer(null),[handleSelectAnswer]

  )

  if (quizIsComplete) {
    return (
     <Summary userAnswers={userAnswers}/>
    );
  }


  
 

  return (
    <div id="quiz">
      
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        
        onSelectAnswer={handleSelectAnswer}
        
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

export default Quiz