import reiniciar from '../PhaserImg/Button03.png';

class BotonReiniciar {
    constructor(escena){
        this.escenaRelacionada = escena;
    }

    preload(){
        this.escenaRelacionada.load.image('botonReiniciar', reiniciar);
    }

    create(){
        this.botonReiniciar = this.escenaRelacionada.add.image(200, 550, 'botonReiniciar').setInteractive();
        this.botonReiniciar.setScale(1);
        this.botonReiniciar.on('pointerdown', ()=>{
            this.escenaRelacionada.scene.start('level1');
            this.vida = 3;
        });
    }
}

export default BotonReiniciar;