import iniciar from '../PhaserImg/Button02.png'//importamos la imagen para iniar el juego

class BotonIniciar {
    //creamos la escena para inicar el juego 
    constructor(escena){
        this.escenaRelacionada = escena;
    }

    preload(){
        this.escenaRelacionada.load.image('botonIniciar', iniciar);
    }

    //creamos el boton dentro de la escema que nos llevara al nivel 1 del juego
    create(){
        this.botonIniciar = this.escenaRelacionada.add.image(200, 350, 'botonIniciar').setInteractive();
        this.botonIniciar.on('pointerdown', ()=>{
            this.escenaRelacionada.scene.start('level1');
        });
        this.botonIniciar.setScale(1);
    }
}

export default BotonIniciar;