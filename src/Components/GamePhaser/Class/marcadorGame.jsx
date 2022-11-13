class marcadorGame{
    constructor(escena){
        this.escenaRelacionada = escena;
        this.puntaje = 0;
    }

    create(){
        this.puntajeTexto = this.escenaRelacionada.add.text(270, 5, 'Puntaje:0', { fontSize: '20px', fill: '#000' }).setDepth(0.1);
    }

    incremenarPuntaje(puntos){
        this.puntaje += puntos;
        this.puntajeTexto.setText('Puntaje:' + this.puntaje);
    }
}

export default marcadorGame;