import { GameObject } from "./GameObject.js";
import { Assets } from "./Assets.js";
import { Input } from "./Input.js";
import { Laser } from "./Laser.js";
import { Alien } from "./Alien.js";

export class Player extends GameObject {
    private speed : number = 10
    private timestampShoot : number = 0;
    private readonly shootingdelay : number = 200;

    protected start(): void {
        this.setImage(Assets.getPlayerImage());

        this.setPosition({
            x : this.getGame().CANVAS_WIDTH/2,
            y : this.getGame().CANVAS_HEIGHT - this.getImage().height - 10
        });
    }
    protected update(): void {
        // console.log(this.getPosition());
        // console.log(Input.getAxisX());

        this.setPosition({
            x : this.getPosition().x += this.speed * Input.getAxisX(),
            y : this.getPosition().y
        })

        if (Input.getIsShooting() && Date.now() - this.timestampShoot > this.shootingdelay){
            this.getGame().instanciate(new Laser(this.getGame()));
            this.timestampShoot = Date.now();
        }
    }

    protected collide(other: GameObject): void {
        console.log("Player collide");
        if (other instanceof Alien) {

        }
    }
}