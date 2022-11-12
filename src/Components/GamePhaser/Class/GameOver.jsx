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
        const soundConfig = {
            loop: false,
            volume: 0.1
        }
        if (!this.sound.locked) {
            this.gameOverS.play(soundConfig)
        }
        else {
            this.sound.once(Phaser.sound.Events.UNLOCKED, () => {
                this.gameOverS.play(soundConfig)
            })
        }
        this.add.image(200, 300, 'gameOverScene');
    }
}

export default GameOver;