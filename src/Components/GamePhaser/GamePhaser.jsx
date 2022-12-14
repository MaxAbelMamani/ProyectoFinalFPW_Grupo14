import React from 'react'
import Phaser from "phaser";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

//Importando escenas
import Level1 from "./Class/Level1.jsx";
import Level2 from "./Class/Level2.jsx";

import GameOver from "./Class/GameOver.jsx";
import Win from "./Class/Win.jsx";
import Start from "./Class/Start.jsx";

export default function GamePhaser() {
        const [listo, setListo] = useState(false);
        useEffect(()=>{
            const configuracion = {
                scale:{
                    width: 400,
                    height: 600,
                }
            }

            const escenas = [Start,Level1, Level2,GameOver,Win];
            const crearEscena = Scene =>new Scene(configuracion);
            const iniciarEscena = () => escenas.map(crearEscena);

            const config = {
                type: Phaser.AUTO,
                ...configuracion,
                physics: {
                    default: "arcade",
                    arcade: {
                        gravity: {y: 0},
                        debug:false
                    },
                },
                scene: iniciarEscena(),
            };
            const game = new Phaser.Game(config);
            game.events.on("LISTO", setListo);
            return() => {
                setListo(false);
                game.destroy(true);        }
        },[listo]);
    return(
        <>
            <header className='header'>
                <h1 className='title__header'>AppleCatcher</h1>
            </header>
            <div id='game' className='game'>

            </div>
            <Link className='btn' to={"/"}><span>Inicio</span></Link>
            <Link className='btn' to={"/MenuGames"}><span>Menu Juegos</span></Link>
        </>
    ) 
}
