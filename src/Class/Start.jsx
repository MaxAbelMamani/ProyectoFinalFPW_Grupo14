import React from 'react';
import Phaser from 'phaser';
import manzanaList from './manzanaList';
class Start extends Phaser.Scene {
    constructor(){
        super({ key: 'start'});
    }

    init(){
        this.listaDeManzanas = new manzanaList(this);
    }

    preload(){
        this.listaDeManzanas.preload();
    }

    create(){
        this.listaDeManzanas.generarManzanas();
        this.contadorManzanzaRojas = 0;
    }

    update(){
        if (this.listaDeManzanas.manzanaRoja.y > 300) {
            this.listaDeManzanas.crearManzanaRoja();
            this.listaDeManzanas.manzanaRoja.x = Phaser.Math.Between(20,780);
            this.contadorManzanzaRojas+=1;
        }

        if (this.listaDeManzanas.manzanaMorada.y > 600) {
            this.listaDeManzanas.manzanaMorada.disableBody(true, true);
            this.listaDeManzanas.crearManzanaMorada();
            this.listaDeManzanas.manzanaMorada.x = Phaser.Math.Between(20,780);
        }

        if (this.contadorManzanzaRojas==4) {
            this.listaDeManzanas.crearManzanaVerde();
            this.contadorManzanzaRojas = 0;
        }

        if (this.listaDeManzanas.manzanaVerde.y > 600) {
            this.listaDeManzanas.manzanaVerde.disableBody(true, true);
        }
    }
}

export default Start;