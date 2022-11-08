import React from 'react'
import { Link } from 'react-router-dom'

//Impotando estilo css de menu games
import '../assets/style/menu_games.css'

export default function MenuGames() {
    return (
        <div className='container__menu__games'>
            <h1 className='title'>¿Que quieres jugar?</h1>
            <div className='menu__games'>
                <Link className='btn' to={"/PPT"}><span>Piedra, Papel y Tijera</span></Link>
                <Link className='btn' to={"/Ahorcado"}><span>Ahorcado</span></Link>
                <Link className='btn' to={"/Arkanoid"}><span>Arkanoid</span></Link>
                <Link className='btn' to={"/GamePhaser"}><span>MonaChina</span></Link>
                <Link className='btn' to={"/PreguntaYRespuesta"}><span>Preguntas y Respuestas</span></Link>
            </div>
            <Link className='btn' to={"/"}><span>Inicio</span></Link>
        </div>
    )
}
