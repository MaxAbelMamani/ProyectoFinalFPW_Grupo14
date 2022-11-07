import React from 'react'
import { Link } from 'react-router-dom'

//Importando Juego realizado con phaser
import GamePhaser from './GamePhaser';

export default function Game() {
    return(
        <div className='container-games'>
            <h1 className='title'>GAMES</h1>
            <div className='gamedelamonachina'>
                {GamePhaser()}
            </div>
            <Link className='btn' to={"/"}><span>Inicio</span></Link> 
        </div>
    );
}
