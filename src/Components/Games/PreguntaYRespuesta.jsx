import React from 'react'
import { Link } from 'react-router-dom'

export default function PreguntaYRespuesta() {
  return (
    <div className='container__game'>
        <h1 className='title'>PreguntaYRespuesta</h1>
        <div className='game'>
          
        </div>
        <Link className='btn' to={"/"}><span>Inicio</span></Link>
        <Link className='btn' to={"/MenuGames"}><span>Menu Juegos</span></Link>
    </div>
  )
}
