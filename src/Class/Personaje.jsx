import MonaChinaSprite from '../assets/PhaserImg/MonaChinaSprite.png';

export default class Personaje{
    constructor(escena){
        this.escenaRelacionada = escena;
        this.monaChina;
    }

    preload(){
        this.escenaRelacionada.load.spritesheet('MonaChinaSprite', MonaChinaSprite,
            { frameWidth: 46, frameHeight: 47 }
        )
    }

    create(){

        this.monaChina = this.escenaRelacionada.physics.add.sprite(180, 560, 'MonaChinaSprite');

        this.monaChina.setCollideWorldBounds(true);

        this.monaChina.setBounce(0.2);

        this.escenaRelacionada.anims.create({
            key: 'left',
            frames: this.escenaRelacionada.anims.generateFrameNumbers('MonaChinaSprite', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.escenaRelacionada.anims.create({
            key: 'turn',
            frames: [{ key: 'MonaChinaSprite', frame: 4 }],
            frameRate: 10
        });

        this.escenaRelacionada.anims.create({
            key: 'right',
            frames: this.escenaRelacionada.anims.generateFrameNumbers('MonaChinaSprite', { start: 4, end: 7 }),
            frameRate: 10,
            repeat: -1
        });
    }

    mover(cursors){
        if (cursors.left.isDown) {
            this.monaChina.setVelocityX(-160);

            this.monaChina.anims.play('left', true);
        }
        else if (cursors.right.isDown) {
            this.monaChina.setVelocityX(160);

            this.monaChina.anims.play('right', true);
        }
        else {
            this.monaChina.setVelocityX(0);

            this.monaChina.anims.play('turn');
        }
    }
}
