class marcadorGame{
    constructor(escena, puntajeMaximo){
        this.escenaRelacionada = escena;
        this.puntaje = 0;
        this.puntajeMaximo = puntajeMaximo;
    }

    create(){
        this.puntajeTextoS = this.escenaRelacionada.add.text(2, 7, 'Puntaje: 0/'+ this.puntajeMaximo, { fontFamily: 'fuenteLetra', fontSize: '20px', fill: '#000' }).setDepth(0.1);
        this.puntajeTexto = this.escenaRelacionada.add.text(4, 5, 'Puntaje: 0/'+ this.puntajeMaximo, { fontFamily: 'fuenteLetra', fontSize: '20px'}).setDepth(0.1);
    }

    incremenarPuntaje(puntos){
        this.puntaje += puntos;
        this.puntajeTextoS.setText('Puntaje: ' + this.puntaje +'/'+ this.puntajeMaximo);
        this.puntajeTexto.setText('Puntaje: ' + this.puntaje +'/'+ this.puntajeMaximo);
    }
}

export default marcadorGame;