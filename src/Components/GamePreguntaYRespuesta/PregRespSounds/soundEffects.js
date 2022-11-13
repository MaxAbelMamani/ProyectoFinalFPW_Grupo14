//Importando libreria de sonidos
import {Howl, Howler} from 'howler'

//Importando Musica
import SoundOptionCorrect from '../PregRespSounds/correct.mp3'
import SoundOptionIncorrect from '../PregRespSounds/incorrect.mp3'
import SoundGame from '../PregRespSounds/musicWWTBAM.mp3'
import SoundRestart from '../PregRespSounds/restart.wav'

//Variables de sonido
export const sonidoEleccionCorrecta = new Howl({
    src: [SoundOptionCorrect]
});

export const sonidoEleccionIncorrecta = new Howl({
    src: [SoundOptionIncorrect]
});

export const sonidoDeFondo = new Howl({
    src: [SoundGame]
});

export const restartBtn = new Howl({
    src: [SoundRestart]
});

Howler.volume(0.5);