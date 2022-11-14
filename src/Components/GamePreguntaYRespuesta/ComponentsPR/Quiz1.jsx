import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
//importando efectos de sonido
import { sonidoEleccionCorrecta, sonidoEleccionIncorrecta, restartBtn } from '../PregRespSounds/soundEffects';
//importando json de la preguntas 
import Quiz from '../Data/QuizHTML.json'
//importando estilo del quiz
import '../PregRespStyles/Quiz.css'

export default function Quiz1() {
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
            setPuntaje(puntaje + 1);//suma el puntaje mas uno
            sonidoEleccionCorrecta.play();//efecto de sonido si la opcion es correcta
        }else{
            sonidoEleccionIncorrecta.play();//efecto de sonido si la opcion es incorrecta
        }
        //cambia el color del background de la opcion añadiendo una clase
        //si la opcion es correcta sera verde, si es incorrecta sera rojo
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
        restartBtn.play();//sonido de reiniciar el juego
        setPuntaje(0); //reinicia el puntaje
        setPreguntaActual(0); //vuelve a la primera pregunta
        setTiempoRestante(30); //reiniciar el temporizador
        document.querySelector('.texto__tiempo').style.display = 'block'; //visualiza nuevante el temporizador
        setMostrarResultado(false); //oculta el resultado final
    };

    return (
        <div className='container__game'>
        <header className='header'>
            <h1 className='title-header'>Quiz de HTML</h1>
        </header>
        <div className="game">
            <div className='game__puntaje'>
                <h2 className='texto__puntaje'>Puntaje: {puntaje}</h2>
                <div className='texto__tiempo'>
                    {!desactivarPregunta ? (
                        //si desactivarPregunta es falso me muestra el tiempo restante
                        <h2>Tiempo Restante: {tiempoRestante}</h2>
                    ) : (
                        //si desactivarPregunta es true me muestra un boton para continuar
                        <button
                        className='boton__continuar'
                        onClick={()=>{
                            setTiempoRestante(30); //reinicia el temporizador
                            setDesactivarPregunta(false); //activa nuevamente las respuestas
                            setPreguntaActual(preguntaActual + 1); //pasa a la siguiente pregunta
                        }}>
                        Continuar {'->'}
                        </button>
                    )}
                </div>
            </div>
            {/*Mostrar el resutlado final o las preguntas del juego*/}
            {mostrarResultado ? (
            /*Si mostrar resultado es true muestra el Resutlado Final */
            <div className='resultado__final'>
                <h2 className='titulo__resultado__final'>Resultado Final</h2>
                <h2 className='texto__resultado__final'>
                    {puntaje} de {Quiz.length} correctas - (
                    {(puntaje / Quiz.length) * 100}% completado)
                </h2>
                <button className='boton-reiniciar' onClick={() => reiniciarJuego()}>Reiniciar</button>
            </div>  
            ) : (
            /*Si mostrar resultado es true muestra la carta de pregunta con las opciones*/
            <div className="carta__pregunta carta-html">
                {/* Pregunta actual*/}
                <h2 className='texto__numero__pregunta'>
                Pregunta Nº {preguntaActual + 1} de {Quiz.length}
                </h2>
                <h3 className="texto__pregunta">{Quiz[preguntaActual].titulo}</h3>

                {/* Las posibles respuestas */}
                <div className='opciones__pregunta'>
                {/*Map de las opciones de la pregunta acutal*/}
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