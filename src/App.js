import { useState } from 'react';

import Header from './components/Header';
import Quiz from './components/Quiz';
import StartPage from './components/StartPage';


function App() {

  const [start,setStart]=useState(false);

  const handleClick=()=>{
    setStart(true);
  }

  return (
    <div className="App">

     {start?(
     <>
     
     <Header/>
      <main><Quiz /></main>
      </>):
      
      <StartPage handleClick={handleClick}/>
    }
    </div>
  );
}

export default App;
