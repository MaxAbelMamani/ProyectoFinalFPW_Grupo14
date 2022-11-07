import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='Home'>
        <h1 className='title'>HOME</h1>
        <Link className='btn' to={"/Game"}><span>Juego</span></Link> 
        <Link className='btn' to={"/Team"}><span>Equipo</span></Link> 
    </div>
  )
}
