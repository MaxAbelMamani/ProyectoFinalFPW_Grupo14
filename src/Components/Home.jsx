import React from 'react'
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='Home'>
        <header className='header'>
          <h1 className='title__header'>Grupo 14</h1>
        </header>
        <div className='logo__home'>
          <img src={logo} alt="logo" width="500"/>
        </div>
        <Link className='btn' to={"/MenuGames"}><span>Juegos</span></Link> 
        <Link className='btn' to={"/Team"}><span>Equipo</span></Link> 
    </div>
  )
}
