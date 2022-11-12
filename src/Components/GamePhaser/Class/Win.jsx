import React from 'react';
import Phaser from 'phaser';
import WinScene from '../PhaserImg/WinScene01.png'
import GameWinSound from '../PhaserSounds/SoundYupi.mp3'

class Win extends Phaser.Scene {
    constructor(){
        super({ key: 'win'});
    }

    init(){
        
    }

    preload(){
        this.load.image('winScene', WinScene);
        this.load.audio('gameWinSound', GameWinSound);
    }

    create(){
        this.gameWinS = this.sound.add('gameWinSound');
        this.gameWinS.play();
        this.add.image(200, 300, 'winScene');
    }
}

export default Win;