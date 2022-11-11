import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import Question from '../QuizDeLaCarrera.json'

function QuizDeLaCarrera() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function pintarOptionCorrect(color) {
    const li = document.querySelector('.option-item');
    li.classList.add(color);
  }

  function optionClick(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
      pintarOptionCorrect('green');
    }

    if (currentQuestion + 1 < Question.length) {
      setTimeout(()=>{
        setCurrentQuestion(currentQuestion + 1);
      },2000);
    }else{
      setFinalResults(true);
    }
  }

  function restartGame() {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  }
  return (
    <div className='container__game'>
        <h1>QUIZ CARRERA</h1>
        <div className='quiz-container'>

            <h2>Current Score: {score}</h2>
            {showFinalResults ? (
              <div className='final-result'>
                <h1>Final Result</h1>
                <h2>{score} out of {Question.length} correct - ({(score / Question.length) * 100}%)</h2>
                <button onClick={()=>restartGame()}>Restart Game</button>
              </div>
            ) : (
              <div className='question-card'>
                <h2>Question {currentQuestion + 1} out of {Question.length}</h2>
                <h3 className='question-text'>{Question[currentQuestion].text}</h3>

                <ul className='option-list'>
                  {Question[currentQuestion].options.map((option) =>{
                    return(
                      <li onClick={()=>optionClick(option.isCorrect)} key={option.id} className="option-item">{option.text}</li>
                    );
                  })}
                </ul>
              </div>
            )}
        </div>
        <Link className='btn' to={"/PreguntaYRespuesta"}><span>Elegir Otra Tematica</span></Link>
        <Link className='btn' to={"/"}><span>Inicio</span></Link>
        <Link className='btn' to={"/MenuGames"}><span>Menu Juegos</span></Link>
    </div>
  )
}

export default QuizDeLaCarrera