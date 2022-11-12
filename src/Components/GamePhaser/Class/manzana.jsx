import React, { Component } from 'react'
//Importando Manzanas

import manzanaVerde from "../PhaserImg/ManzanaVerde.png";
import manzanaMorada from "../PhaserImg/ManzanaMorada.png";
import manzanaRoja from "../PhaserImg/ManzanaRoja.png";


export default class Manzana {
    constructor(escena){
        this.escenaRelacionada = escena;
        this.minManzanas = 1;
        this.maxManzanas = 3;

        this.tiempoAparicion = 5000;
        this.tiempoAparicionManzanaMorada = 3000;
        this.tiempoAparicionManzanaVerde = 10000;

        this.velocidadCaida = 1;
        this.velocidadCaidaManzanaMorada = 1;
        this.velocidadCaidaManzanaVerde = 1;

        this.manzanasRojas;
        this.manzanasMoradas;
        this.manzanasVerdes;
    }

    preload(){
        this.escenaRelacionada.load.image('manzanaRoja', manzanaRoja);
        this.escenaRelacionada.load.image('manzanaMorada', manzanaMorada);
        this.escenaRelacionada.load.image('manzanaVerde', manzanaVerde);
    }

    crearManzanas(){
        //manzanas
        this.manzanasRojas = this.escenaRelacionada.physics.add.group({
            defaultKey: 'manzanaRoja',
            frame:0,
            maxSize: 50
        });

        this.manzanasMoradas = this.escenaRelacionada.physics.add.group({
            defaultKey: 'manzanaMorada',
            frame:0,
            maxSize: 50
        });

        this.manzanasVerdes = this.escenaRelacionada.physics.add.group({
            defaultKey: 'manzanaVerde',
            frame:0,
            maxSize: 50
        });

        this.escenaRelacionada.time.addEvent({
            delay: this.tiempoAparicion,
            loop: true,
            callback: ()=>{
                this.generarManazas(this.manzanasRojas);
            }
        });

        this.escenaRelacionada.time.addEvent({
            delay: this.tiempoAparicionManzanaMorada,
            loop: true,
            callback: ()=>{
                this.generarManazas(this.manzanasMoradas);
            }
        });

        this.escenaRelacionada.time.addEvent({
            delay: this.tiempoAparicionManzanaVerde,
            loop: true,
            callback: ()=>{
                this.generarManazas(this.manzanasVerdes);
            }
        });
    }

    generarManazas(manzanas){
        this.numeroManzanas = Phaser.Math.Between(this.minManzanas, this.maxManzanas);

        for (let i = 0; i < this.numeroManzanas; i++) {
            let manzana = manzanas.get();

            if (manzana) {
                manzana.setActive(true).setVisible(true);
                //posicin de las manzanas
                manzana.y = 200;
                manzana.x = Phaser.Math.Between(0, 400);
                this.escenaRelacionada.physics.add.overlap(manzana, manzanas, (manzanaEnColision)=>{
                    manzanaEnColision.x = Phaser.Math.Between(0, 400);
                });
            }
        }
    }
}