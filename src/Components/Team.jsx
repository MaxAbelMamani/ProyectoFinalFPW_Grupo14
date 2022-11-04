import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/style/team.css'

import teamJS from '../Components/team.json';
import Developer from './Developer';

export default function Team() {
    return (
        <>
            <h1 className='title'>Boquita el mas grande Papa</h1>
            <div className='team'>
                {
                teamJS.map((e) => {
                    return (
                        <Developer key={e.id} name={e.name} age={e.age} phrase={e.phrase} imagen={e.src} github={e.github}/>
                    )
                })
                }
            </div>
            <Link className='btn' to={"/"}><span>Inicio</span></Link> 
        </>
    )
}
