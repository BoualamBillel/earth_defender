var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { GameObject } from "./GameObject.js";
import { Assets } from "./Assets.js";
import { Input } from "./Input.js";
import { Laser } from "./Laser.js";
import { Alien } from "./Alien.js";
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 10;
        _this.timestampShoot = 0;
        _this.shootingdelay = 200;
        return _this;
    }
    Player.prototype.start = function () {
        this.setImage(Assets.getPlayerImage());
        this.setPosition({
            x: this.getGame().CANVAS_WIDTH / 2,
            y: this.getGame().CANVAS_HEIGHT - this.getImage().height - 10
        });
    };
    Player.prototype.update = function () {
        // console.log(this.getPosition());
        // console.log(Input.getAxisX());
        this.setPosition({
            x: this.getPosition().x += this.speed * Input.getAxisX(),
            y: this.getPosition().y
        });
        if (Input.getIsShooting() && Date.now() - this.timestampShoot > this.shootingdelay) {
            this.getGame().instanciate(new Laser(this.getGame()));
            this.timestampShoot = Date.now();
        }
    };
    Player.prototype.collide = function (other) {
        console.log("Player collide");
        if (other instanceof Alien) {
        }
    };
    return Player;
}(GameObject));
export { Player };
