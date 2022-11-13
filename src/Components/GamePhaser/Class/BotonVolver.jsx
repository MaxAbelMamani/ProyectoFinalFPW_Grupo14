import volver from '../PhaserImg/Button04.png';

class BotonVolver {
    constructor(escena){
        this.escenaRelacionada = escena;
    }

    preload(){
        this.escenaRelacionada.load.image('botonVolver', volver);
    }

    create(){
        this.botonVolver = this.escenaRelacionada.add.image(200, 330, 'botonVolver').setInteractive();
        this.botonVolver.setScale(1);
        this.botonVolver.on('pointerdown', ()=>{
            this.escenaRelacionada.scene.start('start');
        });
    }
}

export default BotonVolver;