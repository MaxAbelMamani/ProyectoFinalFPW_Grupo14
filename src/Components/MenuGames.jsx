import React from 'react'
import { Link } from 'react-router-dom'

//Impotando estilo css de menu games
import '../assets/style/menu_games.css'

export default function MenuGames() {
    return (
        <div className='container__menu__games'>
            <h1 className='title'>¿Que quieres jugar?</h1>
            <div className='menu__games'>
                <Link className='btn btn__menu__games' to={"/PPT"}><span>Piedra, Papel y Tijera</span></Link>
                <Link className='btn btn__menu__games' to={"/Ahorcado"}><span>Ahorcado</span></Link>
                <Link className='btn btn__menu__games' to={"/Arkanoid"}><span>Arkanoid</span></Link>
                <Link className='btn btn__menu__games' to={"/GamePhaser"}><span>AppleCatcher</span></Link>
                <Link className='btn btn__menu__games' to={"/PreguntaYRespuesta"}><span>Preguntas y Respuestas</span></Link>
            </div>
            <Link className='btn' to={"/"}><span>Inicio</span></Link>
        </div>
    )
}
