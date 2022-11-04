import React from 'react'
import { Link } from 'react-router-dom'

export default function Game() {
  return (
    <div className='Game'>
        <h1 className='title'>Game</h1>
        <Link className='btn' to={"/"}><span>Inicio</span></Link> 
    </div>
  )
}
