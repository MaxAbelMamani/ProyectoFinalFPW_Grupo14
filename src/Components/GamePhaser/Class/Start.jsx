
import BackgroundSound01 from '../PhaserSounds/MusicPhGame01.mp3'
import React from 'react';
import Phaser from 'phaser';
import Suelo01 from '../PhaserImg/platformLevel1.png';
import FondoEscena1 from '../PhaserImg/Escenario1.png';
import Manzana from './manzana';
import Personaje from './Personaje';
class Start extends Phaser.Scene {
    constructor() {
        super({ key: 'start' });
        this.vida = 3;
        this.score = 0;
        this.texto;
    }

    init() {
        this.manzanas = new Manzana(this);
        this.monaChina = new Personaje(this);

    }

    preload() {
        this.monaChina.preload();
        this.load.image('BackGround01', FondoEscena1);
        this.load.image('platform', Suelo01);
        this.load.audio('sound01', BackgroundSound01);
        this.manzanas.preload();
    }

    create() {

        this.sonidoFondo = this.sound.add('sound01');
        const soundConfig = {
            loop: true,
            volume: 0.1
        }
        if (!this.sound.locked) {
            this.sonidoFondo.play(soundConfig)
        }
        else {
            this.sound.once(Phaser.sound.Events.UNLOCKED, () => {
                this.sonidoFondo.play(soundConfig)
            })
        }


        this.add.image(200, 300, 'BackGround01');


        this.platform = this.physics.add.staticGroup();


        this.platform.create(400, 600, 'platform').refreshBody();


        this.platform.create(200, 600, 'platform').refreshBody();

        this.lifetexto = this.add.text(10, 5, 'Vidas 3/' + this.vida, { fontSize: '20px', fill: '#000' }).setDepth(0.1);
        this.manzanas.crearManzanas();
        this.monaChina.create();

        this.physics.add.collider(this.monaChina.monaChina, this.suelo);

        this.scoreText = this.add.text(270, 5, 'Puntaje:' + this.score, { fontSize: '20px', fill: '#000' });
        this.cursors = this.input.keyboard.createCursorKeys();

        //gestion de la colision entre la el personaje principal y las manzanas rojas
        this.physics.add.overlap(this.monaChina.monaChina, this.manzanas.manzanasRojas, this.colisionPlayerManzanaR, null, this);
        //gestion de la colision entre la el personaje principal y las manzanas moradas
        this.physics.add.overlap(this.monaChina.monaChina, this.manzanas.manzanasMoradas, this.colisionPlayerManzanaM, null, this);
        //gestion de la colision entre la el personaje principal y las manzanas verdes
        this.physics.add.overlap(this.monaChina.monaChina, this.manzanas.manzanasVerdes, this.colisionPlayerManzanaV, null, this);

        this.colisionManzanaRPlayer = false;
    }

    update() {
        this.monaChina.mover(this.cursors);
        this.destruirYResutilizarManzana(this.manzanas.manzanasRojas);
        this.destruirYResutilizarManzana(this.manzanas.manzanasMoradas);
        this.destruirYResutilizarManzana(this.manzanas.manzanasVerdes);

        if(this.vida == 0){
            this.mostrarGameOver();
            this.sonidoFondo.stop();
        }
        if(this.score == 40){
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
            this.score += 10;
            this.scoreText.setText('Puntaje:' + this.score);
        }
    }

    colisionPlayerManzanaM(monaChina, manzanaMorada) {
        if (manzanaMorada.active) {
            this.manzanas.manzanasMoradas.killAndHide(manzanaMorada);
            manzanaMorada.setActive(false);
            manzanaMorada.setVisible(false);
            this.vida--;
            this.lifetexto.setText('Vidas 3/' + this.vida);
        }
    }
    colisionPlayerManzanaV(monaChina, manzanaVerde) {
        if (manzanaVerde.active) {
            this.manzanas.manzanasVerdes.killAndHide(manzanaVerde);
            manzanaVerde.setActive(false);
            manzanaVerde.setVisible(false);
            if(this.vida == 3)
            {
                this.vida;
            }
            else{
                this.vida++;
            }
            this.lifetexto.setText('Vidas 3/' + this.vida);    
        }
    }
    mostrarGameOver(){
        this.scene.start('gameover');
    }
    mostrarNivel2(){
        this.scene.start('nivel2');
    }
}

export default Start;