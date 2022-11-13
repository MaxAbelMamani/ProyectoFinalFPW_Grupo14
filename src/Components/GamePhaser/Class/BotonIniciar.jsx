import iniciar from '../PhaserImg/Button02.png'

class BotonIniciar {
    constructor(escena){
        this.escenaRelacionada = escena;
    }

    preload(){
        this.escenaRelacionada.load.image('botonIniciar', iniciar);
    }

    create(){
        this.botonIniciar = this.escenaRelacionada.add.image(350, 400, 'botonIniciar').setInteractive();
        this.botonIniciar.on('pointerdown', ()=>{
            this.escenaRelacionada.scene.start('nivel1');
        });
        this.botonIniciar.setScale(0.7);
    }
}

export default BotonIniciar;