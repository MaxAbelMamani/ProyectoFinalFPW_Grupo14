import React from 'react';
import vidasGame from './VidasGame.jsx';
import Phaser from 'phaser';
import Escena2 from '../PhaserImg/Escenario2.png';
import Suelo2 from '../PhaserImg/platformLevel2.png';
import Personaje from './Personaje';
import Manzana from './manzana';
import BackgroundSound02 from '../PhaserSounds/MusicPhGame02.mp3'
import RedAppleSound from '../PhaserSounds/redApple.wav'
import GreenAppleSound from '../PhaserSounds/greenApple.wav'
import EvilAppleSound from '../PhaserSounds/evilApple.wav'
import marcadorGame from './marcadorGame.jsx';

class Level2 extends Phaser.Scene {
    constructor(){
        super({ key: 'nivel2'});
        //this.vida = 3;
        //this.score = 0;
        //this.texto;
    }

    init(){
        this.marcador = new marcadorGame(this);
        this.manzanas = new Manzana(this);
        this.monaChina = new Personaje(this);
        this.vida = new vidasGame(this);
    }

    preload(){
        this.load.image('BackGround02', Escena2);
        this.load.image('platform02', Suelo2);
        this.monaChina.preload();
        this.manzanas.preload();
        this.load.audio('sound02', BackgroundSound02);
        this.load.audio('redApple', RedAppleSound);
        this.load.audio('greenApple', GreenAppleSound);
        this.load.audio('evilApple', EvilAppleSound);
    }

    create(){
        this.marcador.create();
        this.vida.create();

        this.sonidoFondo = this.sound.add('sound02');
        this.redAppleSound = this.sound.add('redApple');
        this.greenAppleSound = this.sound.add('greenApple');
        this.evilAppleSound = this.sound.add('evilApple');
        const soundConfig = {
            loop: true,
            volume: 0.2
        }
        if (!this.sound.locked) {
            this.sonidoFondo.play(soundConfig)
        }
        else {
            this.sound.once(Phaser.sound.Events.UNLOCKED, () => {
                this.sonidoFondo.play(soundConfig)
            })
        }



        this.add.image(200, 300, 'BackGround02');


        this.suelo = this.physics.add.staticGroup();


        this.suelo.create(400, 600, 'platform02').refreshBody();


        this.suelo.create(200, 600, 'platform02').refreshBody();

        //this.lifetexto = this.add.text(10, 5, this.vida + '/3 Vidas', { fontSize: '20px', fill: '#000' }).setDepth(0.1);
        this.manzanas.crearManzanas();
        this.monaChina.create();

        this.physics.add.collider(this.monaChina.monaChina, this.platform);

        //this.scoreText = this.add.text(270, 5, 'Puntaje:' + this.score, { fontSize: '20px', fill: '#000' });
        this.cursors = this.input.keyboard.createCursorKeys();

        //gestion de la colision entre la el personaje principal y las manzanas rojas
        this.physics.add.overlap(this.monaChina.monaChina, this.manzanas.manzanasRojas, this.colisionPlayerManzanaR, null, this);
        //gestion de la colision entre la el personaje principal y las manzanas moradas
        this.physics.add.overlap(this.monaChina.monaChina, this.manzanas.manzanasMoradas, this.colisionPlayerManzanaM, null, this);
        //gestion de la colision entre la el personaje principal y las manzanas verdes
        this.physics.add.overlap(this.monaChina.monaChina, this.manzanas.manzanasVerdes, this.colisionPlayerManzanaV, null, this);

        this.colisionManzanaRPlayer = false;
    }
    update(){
        this.monaChina.mover(this.cursors);
        this.destruirYResutilizarManzana(this.manzanas.manzanasRojas);
        this.destruirYResutilizarManzana(this.manzanas.manzanasMoradas);
        this.destruirYResutilizarManzana(this.manzanas.manzanasVerdes);

        if(this.vida.vidas == 0){
            this.mostrarGameOver();
            this.sonidoFondo.stop();
        }
        if(this.marcador.puntaje == 40){
            this.mostrarNivel2();
            this.sonidoFondo.stop();
        }
        
    }
    destruirYResutilizarManzana(manzanas) {
        Phaser.Actions.IncY(manzanas.getChildren(), this.manzanas.velocidadCaida);
        manzanas.children.iterate(function (manzana) {
            if (manzana.y > 600) {
                manzanas.killAndHide(manzana);
            }
        });
    }
    colisionPlayerManzanaR(monaChina, manzanaRoja) {
        if (manzanaRoja.active) {
            this.manzanas.manzanasRojas.killAndHide(manzanaRoja);
            manzanaRoja.setActive(false);
            manzanaRoja.setVisible(false);
            this.marcador.incremenarPuntaje(10);
            this.redAppleSound.play();
        }
    }

    colisionPlayerManzanaM(monaChina, manzanaMorada) {
        if (manzanaMorada.active) {
            this.manzanas.manzanasMoradas.killAndHide(manzanaMorada);
            manzanaMorada.setActive(false);
            manzanaMorada.setVisible(false);
            this.vida.decrementarVida(1);
            //this.lifetexto.setText(this.vida + '/3 Vidas');
            this.evilAppleSound.play();
        }
    }
    colisionPlayerManzanaV(monaChina, manzanaVerde) {
        if (manzanaVerde.active) {
            this.manzanas.manzanasVerdes.killAndHide(manzanaVerde);
            manzanaVerde.setActive(false);
            manzanaVerde.setVisible(false);
            this.greenAppleSound.play();
            this.vida.aumentarVida(1);
            //this.lifetexto.setText(this.vida + '/3 Vidas');    
        }
    }
    mostrarGameOver(){
        this.scene.start('gameover');
    }
    mostrarNivel2(){
        this.scene.start('win');
    }
}

export default Level2;