import React from 'react';
import Phaser from 'phaser';
import FondoMenu from '../PhaserImg/StartScene02.png'
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
        this.load.image('fondoMenu', FondoMenu);
        this.botonIniciar.preload();
        this.load.audio('sonidoInicial', SonidoInicial);
    }

    create(){
        this.add.image(200, 300, 'fondoMenu');
        this.botonIniciar.create();
        this.sonido = this.sound.add('sonidoInicial');
        this.sonido.play();
    }
}

export default Start;