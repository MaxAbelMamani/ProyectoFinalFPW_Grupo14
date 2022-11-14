import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import { sonidoEleccionCorrecta, sonidoEleccionIncorrecta, restartBtn } from '../PregRespSounds/soundEffects';

import Quiz from '../Data/QuizCSS.json'
import '../PregRespStyles/Quiz.css'

export default function Quiz3() {
    const [tiempoRestante, setTiempoRestante] = useState(30);
    const [desactivarPregunta, setDesactivarPregunta] = useState(false);

    const [mostrarResultado, setMostrarResultado] = useState(false);
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [puntaje, setPuntaje] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
        if (tiempoRestante > 0) {
            setTiempoRestante((prev) => prev - 1);
        }
        if (tiempoRestante === 0) {
            setDesactivarPregunta(true);
        }
        }, 1000);

        return () => clearInterval(intervalo);
    }, [tiempoRestante]);

    function seleccionarOpcion(isCorrect, e){
        if (isCorrect) {
            setPuntaje(puntaje + 1);
            sonidoEleccionCorrecta.play();
        }else{
            sonidoEleccionIncorrecta.play();
        }

        e.target.classList.add(isCorrect? "correct" : "incorrect");

        setTimeout(()=>{
        if (preguntaActual + 1 < Quiz.length) {
            setPreguntaActual(preguntaActual + 1);
            setTiempoRestante(30);
            e.target.classList.remove(isCorrect? "correct" : "incorrect");
        } else {
            setMostrarResultado(true);
            document.querySelector('.texto__tiempo').style.display = 'none';
        }
        },400);
    };

    function reiniciarJuego(){
        restartBtn.play();
        setPuntaje(0);
        setPreguntaActual(0);
        setTiempoRestante(30);
        document.querySelector('.texto__tiempo').style.display = 'block';
        setMostrarResultado(false);
    };

    return (
        <div className='container__game'>
        <header className='header'>
            <h1 className='title-header'>Quiz de CSS</h1>
        </header>
        <div className="game">
            <div className='game__puntaje'>
                <h2 className='texto__puntaje'>Puntaje: {puntaje}</h2>
                <div className='texto__tiempo'>{!desactivarPregunta ? (
                    <h2>Tiempo Restante: {tiempoRestante}</h2>
                ) : (
                    <button
                    className='boton__continuar'
                    onClick={()=>{
                    setTiempoRestante(30);
                    setDesactivarPregunta(false);
                    setPreguntaActual(preguntaActual + 1);
                    }}>
                    Continuar {'->'}
                    </button>
                )}
                </div>
            </div>
            {/*Mostrar resultados*/}
            {mostrarResultado ? (
            /*Resulado Final */
            <div className='resultado__final'>
                <h2 className='titulo__resultado__final'>Resultado Final</h2>
                <h2 className='texto__resultado__final'>
                {puntaje} de {Quiz.length} correctas - (
                {(puntaje / Quiz.length) * 100}% completado)
                </h2>
                <button className='boton-reiniciar' onClick={() => reiniciarJuego()}>Reiniciar</button>
            </div>
            ) : (
            /*Targeta de Preguntas*/
            <div className="carta__pregunta css">
                {/* Pregunta Actual */}
                <h2 className='texto__numero__pregunta'>
                Pregunta Nº {preguntaActual + 1} de {Quiz.length}
                </h2>
                <h3 className="texto__pregunta">{Quiz[preguntaActual].titulo}</h3>

                {/* Lista de posibles respuestas */}
                <div className='opciones__pregunta'>
                {Quiz[preguntaActual].opciones.map((opcion) =>(
                    <button
                        className="boton-opcion"
                        disabled={desactivarPregunta}
                        key={opcion.id}
                        onClick={(e) => seleccionarOpcion(opcion.isCorrect, e)}
                    >
                    {opcion.textoRespuesta}
                    </button>
                    ))}
                </div>
            </div>
            )}
        </div>
        <div className='botones'>
            <Link className='btn' to={"/MenuGames"}><span>Juegos</span></Link>
            <Link className='btn' to={"/PreguntaYRespuesta"}><span>OTRO QUIZ</span></Link>  
            <Link className='btn' to={"/"}><span>Inicio</span></Link> 
        </div>
        </div>
    )
}