import { Position } from "./Position.js";
import { Assets } from "./Assets.js";
import { Game } from "./Game.js";

export class GameObject {
    private position: Position;
    private image: HTMLImageElement;
    private game: Game;

    constructor(game: Game) {
        this.position = {
            x: 0,
            y: 0
        };
        this.image = Assets.getDefaultImage();
        this.game = game;
        this.start();
    }

    // Getter d'image et de position
    public getImage(): HTMLImageElement {
        return this.image;
    }

    public getPosition(): Position {
        return this.position;
    }

    public getGame(): Game {
        return this.game;
    }

    public setImage(image: HTMLImageElement) {
        this.image = image;
    }

    public setPosition(position: Position) {
        this.position = position;
    }

    protected start() {

    }

    protected update() {

    }

    public callUpdate() {
        this.update();
    }

    public overlap(other: GameObject): boolean {
        if (
            // Check x axis overlap
            (
                other.left() <= this.left() && this.left() <= other.right()
                ||
                other.left() <= this.right() && this.right() <= other.right()
                ||
                this.left() <= other.left() && other.left() <= this.right()
                ||
                this.left() <= other.right() && other.right() <= this.right()
            )
            &&
            (
                // check y axis overlap
                other.top() <= this.top() && this.top() <= other.bottom()
                ||
                other.top() <= this.bottom() && this.bottom() <= other.bottom()
                ||
                this.top() <= other.top() && other.top() <= this.bottom()
                ||
                this.top() <= other.bottom() && other.bottom() <= this.bottom()
            )
        ) {
            return true;        // They overlap
        }
        else {
            return false;       // They do not overlap
        }
    }

    public top(): number {
        return this.position.y;
    }
    public bottom(): number {
        return this.position.y + this.image.height;
    }
    public left(): number {
        return this.position.x;
    }
    public right(): number {
        return this.position.x + this.image.width;
    }

    protected collide(other : GameObject) {   }

    public callCollide(other : GameObject) : void {
        this.collide(other);
    }
}