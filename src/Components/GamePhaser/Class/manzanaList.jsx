import React, { Component } from 'react'

import manzanaRoja from "../PhaserImg/ManzanaRoja.png"
import manzanaVerde from "../PhaserImg/ManzanaVerde.png";
import manzanaMorada from "../PhaserImg/ManzanaMorada.png";

export default class manzanaList {
    constructor(escena){
        this.escenaRelacionada = escena;

        //Variables de posicion y inicial para cada tipo de manzana
        this.posY = 15;

        //Variables de posicion x inicial de valor random para cada tipo de manzana
        this.posXmanzanaR = Phaser.Math.Between(20,780);//Manzana Roja
        this.posXmanzanaV = Phaser.Math.Between(20,780);//Manzana Verde
        this.posXmanzanaM = Phaser.Math.Between(20,780);//Manzana Morada

        //Variables de velocidad inicial de valor random para cada tipo de manzana
        this.velYmanzanaR = Phaser.Math.Between(50,100);//Manzana Roja
        this.velYmanzanaV = Phaser.Math.Between(50,100);//Manzana Verde
        this.velYmanzanaM = Phaser.Math.Between(50,100);//Manzana Morada

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