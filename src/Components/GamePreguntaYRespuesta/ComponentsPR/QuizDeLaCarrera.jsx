import React from 'react'
import { Link } from 'react-router-dom'
function QuizDeLaCarrera() {
  return (
    <div className='container__game'>
        <h1>QUIZ CARRERA</h1>
        <div className='game'>
            
        </div>
        <Link className='btn' to={"/PreguntaYRespuesta"}><span>Elegir Otra Tematica</span></Link>
        <Link className='btn' to={"/"}><span>Inicio</span></Link>
        <Link className='btn' to={"/MenuGames"}><span>Menu Juegos</span></Link>
    </div>
  )
}

export default QuizDeLaCarrera