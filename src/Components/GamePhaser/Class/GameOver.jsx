import React from 'react';
import Phaser from 'phaser';
import gameOverSound from '../PhaserSounds/SoundHuaa.mp3'
import gameOverScene from '../PhaserImg/GameOverScene01.png'

class GameOver extends Phaser.Scene {
    constructor(){
        super({ key: 'gameover'});
    }

    init(){
        
    }

    preload(){
        this.load.audio('gameOverSound', gameOverSound);
        this.load.image('gameOverScene', gameOverScene);
    }

    create(){
        
        this.gameOverS = this.sound.add('gameOverSound');
        this.gameOverS.play();
        this.add.image(200, 300, 'gameOverScene');
    }
}

export default GameOver;