import React from 'react'
import { Link } from 'react-router-dom'

export default function PPT() {
  return (
    <div className='container__game'>
        <header className='header'>
          <h1 className='title__header'>Piedra, Papel y Tijera</h1>
        </header>
        <div className='game'>
           <iframe src="https://piedra-papely-tijera-grupo14-rhektqp8k-matiasgortega.vercel.app/" frameBorder="0" width="1100" height="600"></iframe> 
        </div>
        <Link className='btn' to={"/"}><span>Inicio</span></Link>
        <Link className='btn' to={"/MenuGames"}><span>Menu Juegos</span></Link>
    </div>
  )
}
