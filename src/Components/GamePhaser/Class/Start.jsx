
import React from 'react';
import Phaser from 'phaser';
import Suelo from '../PhaserImg/platformLevel1.png';
import FondoEscena1 from '../PhaserImg/Escenario1.png';
import manzanaList from './manzanaList';
import Personaje from './Personaje';
class Start extends Phaser.Scene {
    constructor() {
        super({ key: 'start' });
    }

    init() {
        this.listaDeManzanas = new manzanaList(this);
        this.monaChina = new Personaje(this);
    }

    preload() {
        this.listaDeManzanas.preload();
        this.monaChina.preload();
        this.load.image('Escena1', FondoEscena1);
        this.load.image('Suelo', Suelo);
    }

    create() {

        this.listaDeManzanas.generarManzanas();

        this.contadorManzanzaRojas = 0;


        this.add.image(200, 300, 'Escena1');


        this.suelo = this.physics.add.staticGroup();


        this.suelo.create(400, 600, 'Suelo').refreshBody();


        this.suelo.create(200, 600, 'Suelo').refreshBody();

        this.monaChina.create();

        this.physics.add.collider(this.monaChina.monaChina, this.suelo);

        this.manzanaRoja = this.physics.add.group();


        this.physics.add.overlap(this.monaChina, this.manzanaRoja, this.recojerManzanaR, null, this);

        this.physics.add.overlap(this.monaChina,this.manzanaVerde,this.recojerManzanaV,null,this);

        this.physics.add.overlap(this.monaChina,this.manzanaMorada,this.recojerManzanaM,null,this);

        this.scoreText = this.add.text(200, 5, 'Puntaje: 0', { fontSize: '32px', fill: '#000' });
        this.cursors = this.input.keyboard.createCursorKeys();

    }

    update() {
        this.monaChina.mover(this.cursors);

        if (this.listaDeManzanas.manzanaRoja.y > 300) {
            this.listaDeManzanas.crearManzanaRoja();
            this.listaDeManzanas.manzanaRoja.x = Phaser.Math.Between(20, 780);
            this.contadorManzanzaRojas += 1;
        }

        if (this.listaDeManzanas.manzanaMorada.y > 590) {
            this.listaDeManzanas.manzanaMorada.disableBody(true, true);
            this.listaDeManzanas.crearManzanaMorada();
            this.listaDeManzanas.manzanaMorada.x = Phaser.Math.Between(20, 780);
        }

        if (this.contadorManzanzaRojas == 4) {
            this.listaDeManzanas.crearManzanaVerde();
            this.contadorManzanzaRojas = 0;
        }

        if (this.listaDeManzanas.manzanaVerde.y > 600) {
            this.listaDeManzanas.manzanaVerde.disableBody(true, true);
        }


    }
    recojerManzanaR(monaChina, manzanaRoja) {
        manzanaRoja.disableBody(true, true);


    }
    recojerManzanaV(monaChina, manzanaVerde){
        manzanaVerde.disableBody(true,true);
    }

    recojerManzanaM(monaChina,manzanaMorada){
        manzanaMorada.disableBody(true,true);
    }
}

export default Start;