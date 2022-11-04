import React from 'react'
import logoGitHub from '../assets/TeamIMG/github.png'

export default function Developer({name, age, phrase, imagen, github}) {
    return (
        <div className='card'>
            <div className='lines'></div>
            <div className='imgBx'>
                <img src={imagen} alt="developer-photo"/>
            </div>
            <div className='content'>
                <div className='details'>
                    <h2 className='name'>{name}</h2>
                    <div className='data'>
                        <p className='description'>{phrase}</p>
                        <p className='description'>Edad: {age}</p>
                        <a className='link-github' href={github} target="_blank"><img src={logoGitHub}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
