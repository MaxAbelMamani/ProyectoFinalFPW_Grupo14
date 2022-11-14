import React from 'react'
import { Link } from 'react-router-dom'

import './othergame.css'

export default function Ahorcado() {
  return (
    <div className='container__game'>
        <header className='header'>
          <h1 className='title__header'>Ahorcado</h1>
        </header>
        <div className='game__other'>
            <iframe className='iframe' src="https://ahorcado-grupo14-gp5pn2wi3-maxabelmamani.vercel.app/" frameBorder="0"></iframe> 
        </div>
        <div className='botones-other-game'>
          <Link className='btn' to={"/"}><span>Inicio</span></Link>
          <Link className='btn' to={"/MenuGames"}><span>Menu Juegos</span></Link>
        </div>
    </div>
  )
}
