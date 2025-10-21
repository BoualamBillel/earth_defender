import { Alien } from "./Alien.js";
import { GameObject } from "./GameObject.js";
import { Input } from "./Input.js";
import { Player } from "./Player.js";
import { Star } from "./Star.js";

export class Game {
    // Public
    public readonly CANVAS_WIDTH: number = 900;
    public readonly CANVAS_HEIGHT: number = 600;

    // Private
    private context: CanvasRenderingContext2D;
    private player: Player;
    private alien: Alien;
    private star: Star;
    private gameObjects: GameObject[] = [];
    private nbAliens: number = 10;

    constructor(game: Game) {
        const canvas: HTMLCanvasElement = document.querySelector("canvas");
        canvas.height = this.CANVAS_HEIGHT;
        canvas.width = this.CANVAS_WIDTH;
        this.context = canvas.getContext("2d");
    }

    public start(): void {
        // Nettoyage et remplissage du background
        this.context.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.context.fillStyle = "#141414";
        this.context.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);

        // J'instancie le player
        this.player = new Player(this);
        this.instanciate(this.player);

        // Instancie 10 aliens
        for (let i = 0; i < this.nbAliens; i++) {
            this.instanciate(new Alien(this));
        }

        // Instancie 100 étoiles
        for (let i = 0; i < 100; i++) {
            this.instanciate(new Star(this));
        }


        // Écoute les inputs
        Input.listen();
        // Démarre la boucle du jeu
        this.loop();
    }

    public instanciate(gameObject: GameObject): void {
        this.gameObjects.push(gameObject);
    }

    public over() : void {
        alert("GameOver");
        window.location.reload();
    }

    public getPlayer() : Player {
        return this.player;
    }

    public destroy(gameObject: GameObject) : void {
        this.gameObjects = this.gameObjects.filter(go => go!=gameObject);
    }

    private draw(gameObject: GameObject) {
        this.context.drawImage(
            gameObject.getImage(),
            gameObject.getPosition().x,
            gameObject.getPosition().y,
            gameObject.getImage().width,
            gameObject.getImage().height
        )
    }

    private loop() {
        setInterval(() => {
            // Je clear la frame précedente
            this.context.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT)
            this.context.fillStyle = "#141414";
            this.context.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT)

            this.gameObjects.forEach(go => {
                go.callUpdate();
                this.gameObjects.forEach(other=>{
                    if(go!=other && go.overlap(other)){
                        go.callCollide(other)
                    }

                })
                this.draw(go);

                if (go instanceof Alien && this.player.overlap(go)){
                    console.log("Alien touche le joueur");
                }

            })
            

        }, 10);
    }
}

