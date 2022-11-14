class vidasGame{
    constructor(escena){
        this.escenaRelacionada = escena;
        this.vidas = 3;
    }

    //creamos los tectos para las vidas del juego
    create(){
        this.vidaTextoS = this.escenaRelacionada.add.text(270, 7, this.vidas + '/3 Vidas', { fontFamily: 'fuenteLetra', fontSize: '20px', fill: '#000' }).setDepth(0.1);
        this.vidaTexto = this.escenaRelacionada.add.text(272, 5, this.vidas + '/3 Vidas', { fontFamily: 'fuenteLetra', fontSize: '20px'}).setDepth(0.1);
    }

    //Restamos vidas al tocar una Manzana morada
    decrementarVida(vidas){
        this.vidas -= vidas;// restamos una vida
        //mostramos las vidas restantes del jugador
        this.vidaTextoS.setText(this.vidas + '/3 Vidas');
        this.vidaTexto.setText(this.vidas + '/3 Vidas');
    }


    //al tocar una manzana verde aumentaremos las vidas
    aumentarVida(vidas){
        
        if(this.vidas == 3){
            this.vidas
        }
        //actulizamos las vidas
        else{
            this.vidas += vidas;
            this.vidaTextoS.setText(this.vidas + '/3 Vidas');
            this.vidaTexto.setText(this.vidas + '/3 Vidas');
        }
    }
}

export default vidasGame;