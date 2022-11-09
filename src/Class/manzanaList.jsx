import React, { Component } from 'react'
//Importando Manzanas

import manzanaRoja from "../assets/PhaserImg/ManzanaRoja.png";
import manzanaVerde from "../assets/PhaserImg/ManzanaVerde.png";
import manzanaMorada from "../assets/PhaserImg/ManzanaMorada.png";

export default class manzanaList {
    constructor(escena){
        this.escenaRelacionada = escena;

        this.posY = 15;

        this.posXmanzanaR = Phaser.Math.Between(20,780);
        this.posXmanzanaV = Phaser.Math.Between(20,780);
        this.posXmanzanaM = Phaser.Math.Between(20,780);

        this.velYmanzanaR = Phaser.Math.Between(50,100);
        this.velYmanzanaV = Phaser.Math.Between(50,100);
        this.velYmanzanaM = Phaser.Math.Between(50,100);

        this.manzanaMorada;
        this.manzanaRoja;
        this.manzanaVerde;
    }

    preload(){
        this.escenaRelacionada.load.image('manzanaVerde', manzanaVerde);
        this.escenaRelacionada.load.image('manzanaRoja', manzanaRoja);
        this.escenaRelacionada.load.image('manzanaMorada', manzanaMorada);
    }

    crearManzanaRoja(){
        this.manzanaRoja = this.escenaRelacionada.physics.add.image(this.posXmanzanaR, this.posY, 'manzanaRoja');
        this.moverManzana(this.manzanaRoja, this.velYmanzanaR);
    }
    
    crearManzanaVerde(){
        this.manzanaVerde = this.escenaRelacionada.physics.add.image(this.posXmanzanaV, this.posY, 'manzanaVerde');
        this.moverManzana(this.manzanaVerde, this.velYmanzanaV);
    }

    crearManzanaMorada(){
        this.manzanaMorada = this.escenaRelacionada.physics.add.image(this.posXmanzanaM, this.posY, 'manzanaMorada');
        this.moverManzana(this.manzanaMorada, this.velYmanzanaM);
    }

    moverManzana(manzana, velocidad){
        manzana.setVelocityY(velocidad);
    }

    generarManzanas(){
        this.crearManzanaRoja();
        this.crearManzanaVerde();
        this.crearManzanaMorada();
    }

}