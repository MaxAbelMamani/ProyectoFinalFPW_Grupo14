/*Zona de Importacion*/
import vidasGame from './VidasGame.jsx';
import SonidoDeFondo from '../PhaserSounds/MusicPhGame01.mp3'
import ManzanaRojaSonido from '../PhaserSounds/redApple.wav'
import ManzanaVerdeSonido from '../PhaserSounds/greenApple.wav'
import ManzanaMoradaSonido from '../PhaserSounds/evilApple.wav'
import Phaser from 'phaser';
import Suelo01 from '../PhaserImg/platformLevel1.png';
import FondoEscena1 from '../PhaserImg/Escenario1.png';
import Manzana from './manzana';
import Personaje from './Personaje';
import marcadorGame from './marcadorGame.jsx';

class Level1 extends Phaser.Scene {
    constructor() {
        super({ key: 'level1' });
    }

    init() {
        this.marcador = new marcadorGame(this, 200);
        this.manzanas = new Manzana(this, 5000, 3000, 12000, 3.5, 3.5, 4);
        this.monaChina = new Personaje(this);
        this.vida = new vidasGame(this);
    }

    preload() {
        this.monaChina.preload();
        this.load.image('Fondo01', FondoEscena1);
        this.load.image('plataforma', Suelo01);
        this.load.audio('sonidoDeFondo', SonidoDeFondo);
        this.load.audio('redApple', ManzanaRojaSonido);
        this.load.audio('greenApple', ManzanaVerdeSonido);
        this.load.audio('evilApple', ManzanaMoradaSonido);
        this.manzanas.preload();
    }

    create() {
        this.marcador.create();
        this.vida.create();
        
        this.sonidoFondo = this.sound.add('sonidoDeFondo');
        this.redAppleSound = this.sound.add('redApple');
        this.greenAppleSound = this.sound.add('greenApple');
        this.evilAppleSound = this.sound.add('evilApple');
        const soundConfig = {
            loop: true,
            volume: 0.2
        }
        if (!this.sound.locked) {
            this.sonidoFondo.play(soundConfig)
        }
        else {
            this.sound.once(Phaser.sound.Events.UNLOCKED, () => {
                this.sonidoFondo.play(soundConfig)
            })
        }


        this.add.image(200, 300, 'Fondo01');

        this.platform = this.physics.add.staticGroup();
        this.platform.create(400, 600, 'plataforma').refreshBody();
        this.platform.create(200, 600, 'plataforma').refreshBody();
        this.manzanas.crearManzanas();
        this.monaChina.create();

        this.physics.add.collider(this.monaChina.monaChina, this.suelo);
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
        this.destruirYResutilizarManzana(this.manzanas.manzanasRojas,this.manzanas.velocidadCaida);
        this.destruirYResutilizarManzana(this.manzanas.manzanasMoradas,this.manzanas.velocidadCaidaManzanaMorada);
        this.destruirYResutilizarManzana(this.manzanas.manzanasVerdes,this.manzanas.velocidadCaidaManzanaVerde);

        if(this.vida.vidas <= 0){
            this.mostrarGameOver();
            this.sonidoFondo.stop();
        }
        if(this.marcador.puntaje >= 200){
            this.mostrarNivel2();
            this.sonidoFondo.stop();
        }
    }

    destruirYResutilizarManzana(manzanas,velocidad) {
        Phaser.Actions.IncY(manzanas.getChildren(), velocidad);
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
            this.marcador.incremenarPuntaje(10);
            this.redAppleSound.play();
        }
    }

    colisionPlayerManzanaM(monaChina, manzanaMorada) {
        if (manzanaMorada.active) {
            this.manzanas.manzanasMoradas.killAndHide(manzanaMorada);
            manzanaMorada.setActive(false);
            manzanaMorada.setVisible(false);
            this.vida.decrementarVida(1);
            this.evilAppleSound.play();
        }
    }

    colisionPlayerManzanaV(monaChina, manzanaVerde) {
        if (manzanaVerde.active) {
            this.manzanas.manzanasVerdes.killAndHide(manzanaVerde);
            manzanaVerde.setActive(false);
            manzanaVerde.setVisible(false);
            this.greenAppleSound.play();
            this.vida.aumentarVida(1);  
        }
    }

    mostrarGameOver(){
        this.scene.start('gameover');
    }

    mostrarNivel2(){
        this.scene.start('nivel2');
    }
}

export default Level1;