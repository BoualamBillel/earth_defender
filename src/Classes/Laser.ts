import { Assets } from "./Assets.js";
import { Position } from "./Position.js";
import { Alien } from "./Alien.js";
import { GameObject } from "./GameObject.js";

export class Laser extends GameObject {
    private speed : number = 10;
    protected start(): void {
        this.setImage(Assets.getLaserImage());

        const playerPos : Position = this.getGame().getPlayer().getPosition();
        this.setPosition({
            x : playerPos.x,
            y : playerPos.y - this.getImage().height
        })
    }
    
    protected update(): void {
        this.setPosition({
            x : this.getPosition().x,
            y : this.getPosition().y - this.speed
        });

        if (this.getPosition().y < 0) {
            this.getGame().destroy(this);
        }
    }

    protected collide (other : GameObject) : void {
        if (other instanceof Alien) {
            console.log("Hit")
            this.getGame().destroy(other);
        }
    }
}