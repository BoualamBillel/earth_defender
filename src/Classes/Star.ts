import { Assets } from "./Assets.js";
import { GameObject } from "./GameObject.js";

export class Star extends GameObject {
    protected start() : void {
        this.setImage(Assets.getStarImage());

        this.setPosition({
            x : Math.random() * this.getGame().CANVAS_WIDTH,
            y : Math.random() * this.getGame().CANVAS_HEIGHT
        });
    }

    protected update(): void {
        this.setPosition({
            x : this.getPosition().x,
            y : this.getPosition().y
        });
    }
}