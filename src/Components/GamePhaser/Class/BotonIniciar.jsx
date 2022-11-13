import iniciar from '../PhaserImg/Button02.png'

class BotonIniciar {
    constructor(escena){
        this.escenaRelacionada = escena;
    }

    preload(){
        this.escenaRelacionada.load.image('botonIniciar', iniciar);
    }

    create(){
        this.botonIniciar = this.escenaRelacionada.add.image(200, 350, 'botonIniciar').setInteractive();
        this.botonIniciar.on('pointerdown', ()=>{
            this.escenaRelacionada.scene.start('level1');
        });
        this.botonIniciar.setScale(1);
    }
}

export default BotonIniciar;