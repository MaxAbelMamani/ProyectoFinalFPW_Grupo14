//Importando libreria de sonidos
import {Howl} from 'howler';

//Importando Musica
import SoundOptionCorrect from '../PregRespSounds/correct.mp3'
import SoundOptionIncorrect from '../PregRespSounds/incorrect.mp3'
import SoundRestart from '../PregRespSounds/restart.wav'

//Variables de sonido
export const sonidoEleccionCorrecta = new Howl({
    src: [SoundOptionCorrect],
    volume: 0.4
});

export const sonidoEleccionIncorrecta = new Howl({
    src: [SoundOptionIncorrect],
    volume: 0.4
});

export const restartBtn = new Howl({
    src: [SoundRestart],
    volume: 0.4
});