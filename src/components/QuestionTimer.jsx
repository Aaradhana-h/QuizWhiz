import React, { useEffect } from 'react'
import { useState } from 'react';

const QuestionTimer = ({timeout,onTimeOut,mode}) => {

    const [remainingTime,setRemainingTime]=useState(timeout);

    useEffect(()=>{

        const timer=setTimeout(onTimeOut, timeout);

        return ()=>{
            clearTimeout(timer);
        }
    },[timeout,onTimeOut]);


    useEffect(()=>{
        const interval=setInterval(() => {
          setRemainingTime((prevRemainingtime) => prevRemainingtime - 100);
        }, 100);

        return ()=>{
            clearInterval(interval);
        };

    },[]);
    
    


  return (
    <progress 
    id='question-time' 
    max={timeout}
    value={remainingTime}
    className={mode}
    />

   
  )
}

export default QuestionTimer