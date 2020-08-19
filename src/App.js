import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  const [randomNum, setRandomNum] = useState(0);

  const generateRandom = () => {
    setRandomNum(Math.floor((Math.random()*100)+1));
    console.log(randomNum)
  }
  

  useEffect(() => {
    const generateRandom = setInterval(() => {
      setRandomNum(Math.floor((Math.random()*100)+1));
    }, 5000);
  },[]);


 
  return (
    <div className="App">
      <p>Random Number: {randomNum}</p>
      <button onClick={generateRandom}>Generate Random Number</button>
    </div>
  );
}

export default App;
