import { Alien } from "./Alien.js";
import { Input } from "./Input.js";
import { Player } from "./Player.js";
var Game = /** @class */ (function () {
    function Game(game) {
        this.CANVAS_WIDTH = 900;
        this.CANVAS_HEIGHT = 600;
        var canvas = document.querySelector("canvas");
        canvas.height = this.CANVAS_HEIGHT;
        canvas.width = this.CANVAS_WIDTH;
        this.context = canvas.getContext("2d");
    }
    Game.prototype.start = function () {
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
    };
    Game.prototype.draw = function (gameObject) {
        this.context.drawImage(gameObject.getImage(), gameObject.getPosition().x, gameObject.getPosition().y, gameObject.getImage().width, gameObject.getImage().height);
    };
    Game.prototype.loop = function () {
        var _this = this;
        setInterval(function () {
            // Je clear la frame précedente
            _this.context.clearRect(0, 0, _this.CANVAS_WIDTH, _this.CANVAS_HEIGHT);
            // Je rempli le fond
            _this.context.fillStyle = "#141414";
            _this.context.fillRect(0, 0, _this.CANVAS_WIDTH, _this.CANVAS_HEIGHT);
            // Je redessine le joueur à chaque frame
            _this.draw(_this.player);
            // Mise à jour du joueur
            _this.player.callUpdate();
            _this.alien.callUpdate();
            _this.draw(_this.alien);
        }, 10);
    };
    return Game;
}());
export { Game };
