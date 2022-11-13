import React from 'react'
import { Link } from 'react-router-dom'

import './PregRespStyles/PreguntaYRespuesta.css'

export default function PreguntaYRespuesta() {
  return (
    <div className='container__quiz'>
      <header className='header'>
        <h1 className='title__header'>Preguntas y Respuestas</h1>
      </header>
      <div className='quiz__menu'>
        <h3 className='quiz__menu__title'>Eligue un Tema</h3>
        <Link className='quiz__option option1' to={"/Quiz1"}><span>HTML</span></Link>
        <Link className='quiz__option option2' to={"/Quiz2"}><span>JavaScript</span></Link>
        <Link className='quiz__option option3' to={"/Quiz3"}><span>CSS</span></Link>
        <Link className='quiz__option option4' to={"/Quiz4"}><span>F.P.W</span></Link>
      </div>
      <div className='botones'>
        <Link className='btn' to={"/MenuGames"}><span>Juegos</span></Link> 
        <Link className='btn' to={"/"}><span>Inicio</span></Link>
      </div>
    </div>
  )
}

