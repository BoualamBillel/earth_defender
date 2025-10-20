import { Alien } from "./Alien.js";
import { GameObject } from "./GameObject.js";
import { Input } from "./Input.js";
import { Player } from "./Player.js";

export class Game {
    private context: CanvasRenderingContext2D;
    public readonly CANVAS_WIDTH: number = 900;
    public readonly CANVAS_HEIGHT: number = 600;

    constructor(game: Game) {
        const canvas: HTMLCanvasElement = document.querySelector("canvas");
        canvas.height = this.CANVAS_HEIGHT;
        canvas.width = this.CANVAS_WIDTH;
        this.context = canvas.getContext("2d");
    }

    private player: Player;
    private alien: Alien;
    public start(): void {
        // Nettoyage et remplissage du background
        this.context.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.context.fillStyle = "#141414";
        this.context.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);

        // J'instancie le player
        this.player = new Player(this);
        // Je le dessine
        this.draw(this.player);

        // J'instancie l'Alien
        this.alien = new Alien(this);
        // Je le dessine
        this.draw(this.alien);

        // Écoute les inputs
        Input.listen();
        // Démarre la boucle du jeu
        this.loop();
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
            this.context.clearRect
                (0, 0,
                    this.CANVAS_WIDTH, this.CANVAS_HEIGHT,
                )
            // Je rempli le fond
            this.context.fillStyle = "#141414";
            this.context.fillRect(
                0, 0,
                this.CANVAS_WIDTH, this.CANVAS_HEIGHT
            )
            // Je redessine le joueur à chaque frame
            this.draw(this.player);
            // Mise à jour du joueur
            this.player.callUpdate();

            this.alien.callUpdate();
            this.draw(this.alien);
        }, 10);
    }
}

