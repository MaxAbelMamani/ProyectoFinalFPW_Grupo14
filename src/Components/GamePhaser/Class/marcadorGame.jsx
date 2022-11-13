class marcadorGame{
    constructor(escena){
        this.escenaRelacionada = escena;
        this.puntaje = 0;
    }

    create(){
        this.puntajeTextoS = this.escenaRelacionada.add.text(242, 7, 'Puntaje: 0', { fontFamily: 'fuenteLetra', fontSize: '20px', fill: '#000' }).setDepth(0.1);
        this.puntajeTexto = this.escenaRelacionada.add.text(240, 5, 'Puntaje: 0', { fontFamily: 'fuenteLetra', fontSize: '20px'}).setDepth(0.1);
    }

    incremenarPuntaje(puntos){
        this.puntaje += puntos;
        this.puntajeTextoS.setText('Puntaje: ' + this.puntaje);
        this.puntajeTexto.setText('Puntaje: ' + this.puntaje);
    }
}

export default marcadorGame;