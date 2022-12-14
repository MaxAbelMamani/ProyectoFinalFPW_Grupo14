import React from 'react';
import Phaser from 'phaser';
import WinScene from '../PhaserImg/WinScene01.png'
import GameWinSound from '../PhaserSounds/SoundYupi.mp3'
import BotonVolver from './BotonVolver';

class Win extends Phaser.Scene {
    constructor(){
        super({ key: 'win'});
    }

    init(){
        this.botonVolver = new BotonVolver(this);
    }

    preload(){
        this.load.image('winScene', WinScene);//Cramos la esena "Win"
        this.load.audio('gameWinSound', GameWinSound);//cargamos el sonido "win"
        this.botonVolver.preload();
        
    }

    create(){
        this.gameWinS = this.sound.add('gameWinSound');//
        this.gameWinS.play();
        this.add.image(200, 300, 'winScene');// cargamos la imagen "Win" del juego
        this.botonVolver.create();
    }
}

export default Win;