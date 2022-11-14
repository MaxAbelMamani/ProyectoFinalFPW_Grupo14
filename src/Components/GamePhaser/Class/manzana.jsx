import React, { Component } from 'react'
//Importando Manzanas

import manzanaVerde from "../PhaserImg/ManzanaVerde.png";
import manzanaMorada from "../PhaserImg/ManzanaMorada.png";
import manzanaRoja from "../PhaserImg/ManzanaRoja.png";


export default class Manzana {
    constructor(escena, timeAppleR, timeAppleM, timeAppleV, speedAppleR, speedAppleM, speedAppleV){
        //variable para determinar la escena realaionada
        this.escenaRelacionada = escena;

        //variables para determinar el tiempo de aparicion las distintas manzanas
        this.tiempoAparicion = timeAppleR;
        this.tiempoAparicionManzanaMorada = timeAppleM;
        this.tiempoAparicionManzanaVerde = timeAppleV;

        //variables para determinar la velocidad de caida las distintas manzanas
        this.velocidadCaida = speedAppleR;
        this.velocidadCaidaManzanaMorada = speedAppleM;
        this.velocidadCaidaManzanaVerde = speedAppleV;

        //variables para identificar los distitos grupos de manzanas
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
        //grupo de manzanass Rojas
        this.manzanasRojas = this.escenaRelacionada.physics.add.group({
            defaultKey: 'manzanaRoja', //key de la imagen
            maxSize: 50 //cantidad de manzanas que podran estar cargadas al mismo tiempo
        });

        //grupo de manzanas Moradas
        this.manzanasMoradas = this.escenaRelacionada.physics.add.group({
            defaultKey: 'manzanaMorada',
            maxSize: 50
        });

        //grupo de manzanas Verder
        this.manzanasVerdes = this.escenaRelacionada.physics.add.group({
            defaultKey: 'manzanaVerde',
            maxSize: 50
        });

        //evento de tiempo de las manzanas Rojas
        this.escenaRelacionada.time.addEvent({
            delay: this.tiempoAparicion, //esta propiedad determina el tiempo de aparacicion de las manzanas
            loop: true, //esta propiedad es para que el evento se repia una y otra vez
            callback: ()=>{ //esta propiedad determina el evento que lanzara
                //llama al metodo generar manzanas Rojas
                this.generarManazasRojas(this.manzanasRojas);
            }
        });

        //evento de tiempo de las manzanas Moradas
        this.escenaRelacionada.time.addEvent({
            delay: this.tiempoAparicionManzanaMorada,
            loop: true,
            callback: ()=>{
                this.generarManazasMoradas(this.manzanasMoradas);
            }
        });

        //evento de tiempo de las manzanas Verdes
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
        //bucle que se repetira segun el numero de manzanas
        for (let index = 0; index < this.numeroManzanasRojas; index++) {
            //le pedimos una manzana al grupo
            let manzana = manzanas.get();
            //si hay una manzana disponible
            if (manzana) {
                manzana.setActive(true).setVisible(true);//lo activamos y lo hacemos visible
                manzana.y = 190;//posicion de las manzanas en y
                manzana.x = Phaser.Math.Between(10, 390); //posicion de las manzanas en x aleatorio
                //lo siguiente detecta si hay una superposicion de una manzana sobre otra manzana del grupo de manzanas
                //nos debolvera la manazana en colision en un callback
                this.escenaRelacionada.physics.add.overlap(manzana, manzanas, (manzanaEnColision)=>{
                    //cambia la posicion de la manzana que se sobrepone a una posicicion distinta en el eje x
                    manzanaEnColision.x = Phaser.Math.Between(10, 390);
                });
            }
        }
    }

    generarManazasMoradas(manzanas){
        this.numeroManzanasMoradas = Phaser.Math.Between(1,3);
        for (let index = 0; index < this.numeroManzanasRojas; index++) {
            let manzana = manzanas.get();

            if (manzana) {
                manzana.setActive(true).setVisible(true);
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
        for (let index = 0; index < this.numeroManzanasRojas; index++) {
            let manzana = manzanas.get();

            if (manzana) {
                manzana.setActive(true).setVisible(true);
                manzana.y = 240;
                manzana.x = Phaser.Math.Between(10, 390);
                this.escenaRelacionada.physics.add.overlap(manzana, manzanas, (manzanaEnColision)=>{
                    manzanaEnColision.x = Phaser.Math.Between(0, 400);
                });
            }
        }
    }
}