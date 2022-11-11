import React from 'react'
import { Link } from 'react-router-dom'

export default function PreguntaYRespuesta() {
  return (
    <div className='container__game'>
        <h1 className='title'>PreguntaYRespuesta</h1>
        <div className='game'>
          <h2>Eligue una tematica</h2>
          <Link className='btn' to={"/QuizDeLaCarrera"}><span>Quiz De La Carrera</span></Link>
        </div>
        <Link className='btn' to={"/"}><span>Inicio</span></Link>
        <Link className='btn' to={"/MenuGames"}><span>Menu Juegos</span></Link>
    </div>
  )
}