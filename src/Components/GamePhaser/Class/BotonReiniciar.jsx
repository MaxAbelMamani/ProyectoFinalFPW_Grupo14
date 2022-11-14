import reiniciar from '../PhaserImg/Button03.png';

class BotonReiniciar {
    
    //creamos la escena
    constructor(escena){
        this.escenaRelacionada = escena;
    }

    
    preload(){
        this.escenaRelacionada.load.image('botonReiniciar', reiniciar);
    }

    //creamos el boton reiniciar dentro de la escema que nos llevara al nivel 1 del juego
    create(){
        this.textoBotonReiniciarShadow = this.escenaRelacionada.add.text(144, 537, 'Reiniciar', { fontFamily: 'fuenteLetra', fontSize: '20px', fill: '#000'}).setDepth(0.1);
        this.textoBotonReiniciar = this.escenaRelacionada.add.text(142, 535, 'Reiniciar', { fontFamily: 'fuenteLetra', fontSize: '20px'}).setDepth(0.1);
        this.botonReiniciar = this.escenaRelacionada.add.image(200, 550, 'botonReiniciar').setInteractive();
        this.botonReiniciar.setScale(1);
        this.botonReiniciar.on('pointerdown', ()=>{
            this.escenaRelacionada.scene.start('level1');
            this.vida = 3;
        });
    }
}

export default BotonReiniciar;