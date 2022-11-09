import React from 'react'
import { Link } from 'react-router-dom'

export default function Ahorcado() {
  return (
    <div className='container__game'>
        <h1 className='title'>Ahorcado</h1>
        <div className='game'>
          {/* <iframe src="#" frameBorder="0"></iframe> */}
        </div>
        <Link className='btn' to={"/"}><span>Inicio</span></Link>
        <Link className='btn' to={"/MenuGames"}><span>Menu Juegos</span></Link>
    </div>
  )
}
