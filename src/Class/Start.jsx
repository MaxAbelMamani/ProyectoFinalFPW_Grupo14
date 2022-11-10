
import React from 'react';
import Phaser from 'phaser';
import Suelo from '../assets/PhaserImg/platformLevel1.png';
import MonaChinaSprite from '../assets/PhaserImg/MonaChinaSprite.png';
import FondoEscena1 from '../assets/PhaserImg/Escenario1.png';
import manzanaList from './manzanaList';
class Start extends Phaser.Scene {
    constructor() {
        super({ key: 'start' });
    }

    init() {
        this.listaDeManzanas = new manzanaList(this);
    }

    preload() {
        this.listaDeManzanas.preload();
        this.load.image('Escena1', FondoEscena1);
        this.load.image('Suelo', Suelo);
        this.load.spritesheet('MonaChinaSprite', MonaChinaSprite,
            { frameWidth: 46, frameHeight: 47 }
        )
    }

    create() {

        this.listaDeManzanas.generarManzanas();


        this.contadorManzanzaRojas = 0;


        this.add.image(200, 300, 'Escena1');


        this.suelo = this.physics.add.staticGroup();


        this.suelo.create(400, 600, 'Suelo').refreshBody();


        this.suelo.create(200, 600, 'Suelo').refreshBody();

        this.monaChina = this.physics.add.sprite(180, 560, 'MonaChinaSprite');

        this.monaChina.setBounce(0.2);


        this.monaChina.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('MonaChinaSprite', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'MonaChinaSprite', frame: 4 }],
            frameRate: 10
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('MonaChinaSprite', { start: 4, end: 7 }),
            frameRate: 10,
            repeat: -1
        });

        this.physics.add.collider(this.monaChina, this.suelo);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.manzanaRoja = this.physics.add.group();


        this.physics.add.overlap(this.monaChina, this.manzanaRoja, this.recojerManzanaR, null, this);

        this.physics.add.overlap(this.monaChina,this.manzanaVerde,this.recojerManzanaV,null,this);

        this.physics.add.overlap(this.monaChina,this.manzanaMorada,this.recojerManzanaM,null,this);

        this.scoreText = this.add.text(200, 5, 'Puntaje: 0', { fontSize: '32px', fill: '#000' });

    }

    update() {
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

        if (this.cursors.left.isDown) {
            this.monaChina.setVelocityX(-160);

            this.monaChina.anims.play('left', true);
        }
        else if (this.cursors.right.isDown) {
            this.monaChina.setVelocityX(160);

            this.monaChina.anims.play('right', true);
        }
        else {
            this.monaChina.setVelocityX(0);

            this.monaChina.anims.play('turn');
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