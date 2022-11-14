import vidasGame from './VidasGame.jsx';
import Phaser from 'phaser';
import Escena2 from '../PhaserImg/Escenario2.png';
import Suelo2 from '../PhaserImg/platformLevel2.png';
import Personaje from './Personaje';
import Manzana from './manzana';
import BackgroundSound02 from '../PhaserSounds/MusicPhGame02.mp3'
import RedAppleSound from '../PhaserSounds/redApple.wav'
import GreenAppleSound from '../PhaserSounds/greenApple.wav'
import EvilAppleSound from '../PhaserSounds/evilApple.wav'
import marcadorGame from './marcadorGame.jsx';


class Level2 extends Phaser.Scene {
    constructor(){
        super({ key: 'nivel2'});
    }

    init(){
        this.marcador = new marcadorGame(this, 400);
        this.manzanas = new Manzana(this, 5000, 3000, 12000, 5.5, 5.5, 8);
        this.monaChina = new Personaje(this);
        this.vida = new vidasGame(this);
    }

    preload(){
        this.load.image('BackGround02', Escena2);
        this.load.image('plataforma02', Suelo2);
        this.monaChina.preload();
        this.manzanas.preload();
        this.load.audio('sound02', BackgroundSound02);
        this.load.audio('redApple', RedAppleSound);
        this.load.audio('greenApple', GreenAppleSound);
        this.load.audio('evilApple', EvilAppleSound);
    }

    create(){
        this.marcador.create();
        this.vida.create();

        this.sonidoFondo = this.sound.add('sound02');
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

        this.add.image(200, 300, 'BackGround02');

        this.suelo = this.physics.add.staticGroup();


        this.suelo.create(400, 600, 'plataforma02').refreshBody();


        this.suelo.create(200, 600, 'plataforma02').refreshBody();
        
        this.manzanas.crearManzanas();
        this.monaChina.create();

        this.physics.add.collider(this.monaChina.monaChina, this.platform);

        this.cursors = this.input.keyboard.createCursorKeys();

        //gestion de la colision entre la el personaje principal y las manzanas rojas
        this.physics.add.overlap(this.monaChina.monaChina, this.manzanas.manzanasRojas, this.colisionPlayerManzanaR, null, this);
        //gestion de la colision entre la el personaje principal y las manzanas moradas
        this.physics.add.overlap(this.monaChina.monaChina, this.manzanas.manzanasMoradas, this.colisionPlayerManzanaM, null, this);
        //gestion de la colision entre la el personaje principal y las manzanas verdes
        this.physics.add.overlap(this.monaChina.monaChina, this.manzanas.manzanasVerdes, this.colisionPlayerManzanaV, null, this);

        this.colisionManzanaRPlayer = false;
    }
    update(){
        this.monaChina.mover(this.cursors);
        this.destruirYResutilizarManzana(this.manzanas.manzanasRojas,this.manzanas.velocidadCaida);
        this.destruirYResutilizarManzana(this.manzanas.manzanasMoradas,this.manzanas.velocidadCaidaManzanaMorada);
        this.destruirYResutilizarManzana(this.manzanas.manzanasVerdes,this.manzanas.velocidadCaidaManzanaVerde);

        if(this.vida.vidas <= 0){
            this.mostrarGameOver();
            this.sonidoFondo.stop();
        }
        if(this.marcador.puntaje >= 400){
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
        this.scene.start('win');
    }
}

export default Level2;