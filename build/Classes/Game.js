import { Alien } from "./Alien.js";
import { Input } from "./Input.js";
import { Player } from "./Player.js";
import { Star } from "./Star.js";
var Game = /** @class */ (function () {
    function Game(game) {
        // Public
        this.CANVAS_WIDTH = 900;
        this.CANVAS_HEIGHT = 600;
        this.gameObjects = [];
        this.nbAliens = 10;
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
        this.instanciate(this.player);
        // Instancie 10 aliens
        for (var i = 0; i < this.nbAliens; i++) {
            this.instanciate(new Alien(this));
        }
        // Instancie 100 étoiles
        for (var i = 0; i < 100; i++) {
            this.instanciate(new Star(this));
        }
        // Écoute les inputs
        Input.listen();
        // Démarre la boucle du jeu
        this.loop();
    };
    Game.prototype.instanciate = function (gameObject) {
        this.gameObjects.push(gameObject);
    };
    Game.prototype.over = function () {
        alert("GameOver");
        window.location.reload();
    };
    Game.prototype.getPlayer = function () {
        return this.player;
    };
    Game.prototype.destroy = function (gameObject) {
        this.gameObjects = this.gameObjects.filter(function (go) { return go != gameObject; });
    };
    Game.prototype.draw = function (gameObject) {
        this.context.drawImage(gameObject.getImage(), gameObject.getPosition().x, gameObject.getPosition().y, gameObject.getImage().width, gameObject.getImage().height);
    };
    Game.prototype.loop = function () {
        var _this = this;
        setInterval(function () {
            // Je clear la frame précedente
            _this.context.clearRect(0, 0, _this.CANVAS_WIDTH, _this.CANVAS_HEIGHT);
            _this.context.fillStyle = "#141414";
            _this.context.fillRect(0, 0, _this.CANVAS_WIDTH, _this.CANVAS_HEIGHT);
            _this.gameObjects.forEach(function (go) {
                go.callUpdate();
                _this.gameObjects.forEach(function (other) {
                    if (go != other && go.overlap(other)) {
                        go.callCollide(other);
                    }
                });
                _this.draw(go);
                if (go instanceof Alien && _this.player.overlap(go)) {
                    console.log("Alien touche le joueur");
                }
            });
        }, 10);
    };
    return Game;
}());
export { Game };
