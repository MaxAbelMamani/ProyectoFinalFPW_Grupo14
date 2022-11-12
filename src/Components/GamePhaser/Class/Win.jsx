import React from 'react';
import Phaser from 'phaser';
import GameWinSound from '../PhaserSounds/SoundYupi.mp3'

class Win extends Phaser.Scene {
    constructor(){
        super({ key: 'win'});
    }

    init(){
        
    }

    preload(){
        this.load.audio('gameWinSound', GameWinSound);
    }

    create(){
        this.gameWinS = this.sound.add('gameWinSound');
        const soundConfig = {
            loop: false,
            volume: 0.1
        }
        if (!this.sound.locked) {
            this.gameWinS.play(soundConfig)
        }
        else {
            this.sound.once(Phaser.sound.Events.UNLOCKED, () => {
                this.gameWinS.play(soundConfig)
            })
        }
    }
}

export default Win;