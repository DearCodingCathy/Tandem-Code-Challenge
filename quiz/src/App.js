import React, { useEffect, useState } from 'react'
import Query from './Components/Query';
import Data from './Services/Apprentice_TandemFor400_Data.json'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CountUp from 'react-countup';



export default function App() {

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0)
  const [gameEnd, setGameEnd] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    const data = Data;
    // setQuestions(data);
    const questions = data.map((question) => 
      ({
        ...question,
        answers: [
          question.correct,
          ...question.incorrect
        ].sort(() => Math.random() - 0.5)
      }))
    setQuestions(questions)
  }, [])

  //Check for the answer
  const handleAnswer = (answer) => {
    // Prevent double response
    if (!showAnswers) {
      // Change score id correct
      if (answer === questions[currentIndex].correct) {
        //increase the score 
        setScore(score + 10);
      }
    }
    setShowAnswers(true);
  };

  // Show another question
  const handleNext = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    
    setShowAnswers(false);

    if (newIndex >= 10) {
      setGameEnd(true);
    }
  }

  const handleReplay = () => {
    setCurrentIndex(0)
    setGameEnd(false)
  }

  return (
    gameEnd ? (
      <>
      <h1>Game Over!</h1>
      <h2 className='final-score'>
          Final Score: <CountUp end={score} />
        </h2>
        <button
        onClick={handleReplay}>Replay</button>
      </>
    )
      :
      (
    questions.length > 0 ? (
      <div className='shadow-container'>
        
        <Query
          data={questions[currentIndex]}
          showAnswers={showAnswers}
          handleAnswer={handleAnswer}
          handleNext={handleNext}
            />
        </div>
    )
      :
      (
        <h2 className='loading-text'>...Loading</h2>
      )
    
  ));
}
