import React from 'react';

import './Query.css';

const Query = ({
  handleNext,
  showAnswers,
  handleAnswer,
  data: { question, correct, answers },
}) => {

  // const shuffledAnswers = [correct, ...incorrect].sort(() => Math.random() - 0.5);

  return (
    <> 
    <div className='question-contain d-flex my-5 '>

  <div className='question-box mr-3 my-auto '>
        <h2 className='my-2 mx-4'>
            {question}
          </h2>
        </div>

      <div className='answer-contain d-flex flex-column mt-3 mr-3'>
        {answers.map((answer) => {
          
          const bgColor = showAnswers ?
            answer === correct
              ? 'bg-success disabled'
              : 'bg-danger disabled'
            : "btn-secondary";
          
      return (
          <button
          className={` ${bgColor} btn mb-3`}
            onClick={() => handleAnswer(answer)}>
            {answer}
          </button>
        )})}
        
      </div>
      </div>
      
      <div className='d-flex justify-content-end'>

      {showAnswers && (
        <button
        className='next-btn btn-secondary rounded '
        onClick={handleNext}>
          Next Question
        </button>
      )}
      </div>
    </>
)};

export default Query;