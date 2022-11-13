import React from 'react';
import Phaser from 'phaser';
import BackgroundMenu from '../PhaserImg/StartScene02.png'
import BotonIniciar from './BotonIniciar';
import SonidoInicial from '../PhaserSounds/winsquare.wav'

class Start extends Phaser.Scene {
    constructor(){
        super({ key: 'start'});
        this.nivel = 1;
    }

    init(){
        this.botonIniciar = new BotonIniciar(this);
    }

    preload(){
        this.load.image('BackgroundMenu', BackgroundMenu);
        this.botonIniciar.preload();
        this.load.audio('SonidoInicial', SonidoInicial);
    }

    create(){
        this.add.image(200, 300, 'BackgroundMenu');
        this.botonIniciar.create();
        this.initialSound = this.sound.add('SonidoInicial');
        this.initialSound.play();
    }
}

export default Start;