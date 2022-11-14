import React from 'react'
import { Link } from 'react-router-dom'

//Impotando estilo css de menu games
import '../assets/style/menu_games.css'

export default function MenuGames() {
    return (
        <div className='container__menu__games'>
            <header className='header'>
                <h1 className='title__header'>¿Que quieres jugar hoy?</h1>
            </header>
            <div className='menu__games'>
                <Link to={"/PPT"}>
                <img
                    src="src/assets/img/ppt.png"
                    alt="example"
                />
                </Link>
                <Link to={"/Ahorcado"}>
                <img
                    src="src/assets/img/Ahorcado.png"
                    alt="example"
                />
                </Link>
                <Link to={"/GamePhaser"}>
                <img
                    src="src/assets/img/applecatcher.png"
                    alt="example"
                />
                </Link>
                <Link to={"/PreguntaYRespuesta"}>
                <img
                    src="src/assets/img/PyR.png"
                    alt="example"
                />
                </Link>
            </div>
            <Link className='btn' to={"/"}><span>Inicio</span></Link>
        </div>
    )
}
