class vidasGame{
    constructor(escena){
        this.escenaRelacionada = escena;
        this.vidas = 3;
    }

    create(){
        this.vidaTextoS = this.escenaRelacionada.add.text(12, 7, this.vidas + '/3 Vidas', { fontFamily: 'fuenteLetra', fontSize: '20px', fill: '#000' }).setDepth(0.1);
        this.vidaTexto = this.escenaRelacionada.add.text(10, 5, this.vidas + '/3 Vidas', { fontFamily: 'fuenteLetra', fontSize: '20px'}).setDepth(0.1);
    }

    decrementarVida(vidas){
        this.vidas -= vidas;
        this.vidaTextoS.setText(this.vidas + '/3 Vidas');
        this.vidaTexto.setText(this.vidas + '/3 Vidas');
    }
    aumentarVida(vidas){
        if(this.vidas == 3){
            this.vidas
        }
        else{
            this.vidas += vidas;
            this.vidaTextoS.setText(this.vidas + '/3 Vidas');
            this.vidaTexto.setText(this.vidas + '/3 Vidas');
        }
    }
}

export default vidasGame;