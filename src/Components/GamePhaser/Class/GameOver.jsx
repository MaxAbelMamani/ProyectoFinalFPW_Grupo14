import React from 'react';
import Phaser from 'phaser';
import gameOverSound from '../PhaserSounds/SoundHuaa.mp3'
import gameOverScene from '../PhaserImg/GameOverScene01.png'
import BotonReiniciar from './BotonReiniciar.jsx';

class GameOver extends Phaser.Scene {
    constructor(){
        super({ key: 'gameover'});
    }

    init(){
        this.botonReiniciar = new BotonReiniciar(this);
    }

    preload(){
        this.load.audio('gameOverSound', gameOverSound);
        this.load.image('gameOverScene', gameOverScene);
        this.botonReiniciar.preload();
    }

    create(){
        this.add.image(200, 300, 'gameOverScene');
        this.gameOverS = this.sound.add('gameOverSound');
        this.gameOverS.play();
        this.botonReiniciar.create();
    }
}

export default GameOver;