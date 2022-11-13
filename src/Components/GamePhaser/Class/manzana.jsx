import React, { Component } from 'react'
//Importando Manzanas

import manzanaVerde from "../PhaserImg/ManzanaVerde.png";
import manzanaMorada from "../PhaserImg/ManzanaMorada.png";
import manzanaRoja from "../PhaserImg/ManzanaRoja.png";


export default class Manzana {
    constructor(escena, timeAppleR, timeAppleM, timeAppleV, speedAppleR, speedAppleM, speedAppleV){
        this.escenaRelacionada = escena;

        this.tiempoAparicion = timeAppleR;
        this.tiempoAparicionManzanaMorada = timeAppleM;
        this.tiempoAparicionManzanaVerde = timeAppleV;

        this.velocidadCaida = speedAppleR;
        this.velocidadCaidaManzanaMorada = speedAppleM;
        this.velocidadCaidaManzanaVerde = speedAppleV;

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
                this.generarManazasRojas(this.manzanasRojas);
            }
        });

        this.escenaRelacionada.time.addEvent({
            delay: this.tiempoAparicionManzanaMorada,
            loop: true,
            callback: ()=>{
                this.generarManazasMoradas(this.manzanasMoradas);
            }
        });

        this.escenaRelacionada.time.addEvent({
            delay: this.tiempoAparicionManzanaVerde,
            loop: true,
            callback: ()=>{
                this.generarManazasVerdes(this.manzanasVerdes);
            }
        });
    }

    generarManazasRojas(manzanas){
        this.numeroManzanasRojas = Phaser.Math.Between(1,3);
        for (let index = 0; index <= this.numeroManzanasRojas; index++) {
            let manzana = manzanas.get();

            if (manzana) {
                manzana.setActive(true).setVisible(true);
                //posicin de las manzanas
                manzana.y = 190;
                manzana.x = Phaser.Math.Between(10, 390);
                this.escenaRelacionada.physics.add.overlap(manzana, manzanas, (manzanaEnColision)=>{
                    manzanaEnColision.x = Phaser.Math.Between(0, 400);
                });
            }
        }
    }

    generarManazasMoradas(manzanas){
        this.numeroManzanasMoradas = Phaser.Math.Between(1,3);
        for (let index = 0; index <= this.numeroManzanasRojas; index++) {
            let manzana = manzanas.get();

            if (manzana) {
                manzana.setActive(true).setVisible(true);
                //posicin de las manzanas
                manzana.y = 290;
                manzana.x = Phaser.Math.Between(10, 390);
                this.escenaRelacionada.physics.add.overlap(manzana, manzanas, (manzanaEnColision)=>{
                    manzanaEnColision.x = Phaser.Math.Between(0, 400);
                });
            }
        }
    }

    generarManazasVerdes(manzanas){
        this.numeroManzanasVerdes = Phaser.Math.Between(0,1);
        for (let index = 0; index <= this.numeroManzanasRojas; index++) {
            let manzana = manzanas.get();

            if (manzana) {
                manzana.setActive(true).setVisible(true);
                //posicin de las manzanas
                manzana.y = 240;
                manzana.x = Phaser.Math.Between(10, 390);
                this.escenaRelacionada.physics.add.overlap(manzana, manzanas, (manzanaEnColision)=>{
                    manzanaEnColision.x = Phaser.Math.Between(0, 400);
                });
            }
        }
    }
}