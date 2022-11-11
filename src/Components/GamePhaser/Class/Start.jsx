import React from 'react';
import Phaser from 'phaser';

//ESTO ES SOLO DE PRUEBA - SE DEBE MOVER A NIVEL 1 
import manzanaList from './manzanaList';//<-----

class Start extends Phaser.Scene {
    constructor(){
        super({ key: 'start'});
    }

    init(){
        //ESTO ES SOLO DE PRUEBA - SE DEBE MOVER A NIVEL 1 
        this.listaDeManzanas = new manzanaList(this);//<-----
    }

    preload(){
        //ESTO ES SOLO DE PRUEBA - SE DEBE MOVER A NIVEL 1 
        this.listaDeManzanas.preload();//<-----
    }

    create(){
        //ESTO ES SOLO DE PRUEBA - SE DEBE MOVER A NIVEL 1 
        //Se llama al metodo generarManzanas de la clase listaDeManzanas
        this.listaDeManzanas.generarManzanas();//<-----
        //ESTO ES SOLO DE PRUEBA - SE DEBE MOVER A NIVEL 1 
        //Contador de manzanas rojas
        this.contadorManzanzaRojas = 0;//<-----
    }

    //ESTO ES SOLO DE PRUEBA - SE DEBE MOVER A NIVEL 1 
    update(){
        //Condicion para cuando la posicion Y de la manzana roja sea mayor a 300
        //Se llama al metodo crearManzanaRoja de la clase listaDeManzanas para crear una nueva manzana roja
        //Se la repociona en las coordenadas X con un valor random
        //Contador de manzanas se suma en 1
        if (this.listaDeManzanas.manzanaRoja.y > 300) {
            this.listaDeManzanas.crearManzanaRoja();
            this.listaDeManzanas.manzanaRoja.x = Phaser.Math.Between(20,780);
            this.contadorManzanzaRojas+=1;
        }

        //Condicion para cuando la posicion Y de la manzana morada sea mayor a 600
        //se detruye con el metodo disableBody y 
        //Se llama al metodo crearManzanaMorada de la clase listaDeManzanas para crear una nueva manzana morada
        //Se la repociona en las coordenadas X con un valor random
        if (this.listaDeManzanas.manzanaMorada.y > 600) {
            this.listaDeManzanas.manzanaMorada.disableBody(true, true);
            this.listaDeManzanas.crearManzanaMorada();
            this.listaDeManzanas.manzanaMorada.x = Phaser.Math.Between(20,780);
        }

        //Condicion para cuando el contador de manzanas rojas sea igual a 4
        //Se llama al metodo crearManzanaVerde de la clase listaDeManzanas
        //Y se reiniciar el contador a 0
        if (this.contadorManzanzaRojas==4) {
            this.listaDeManzanas.crearManzanaVerde();
            this.contadorManzanzaRojas = 0;
        }

        //Condicion para cuando la posicion Y de la manzana verde sea mayor a 600
        //se detruye con el metodo disableBody
        if (this.listaDeManzanas.manzanaVerde.y > 600) {
            this.listaDeManzanas.manzanaVerde.disableBody(true, true);
        }
    }
}

export default Start;