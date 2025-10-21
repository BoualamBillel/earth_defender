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
import { Assets } from "./Assets.js";
import { Alien } from "./Alien.js";
import { GameObject } from "./GameObject.js";
var Laser = /** @class */ (function (_super) {
    __extends(Laser, _super);
    function Laser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 10;
        return _this;
    }
    Laser.prototype.start = function () {
        this.setImage(Assets.getLaserImage());
        var playerPos = this.getGame().getPlayer().getPosition();
        this.setPosition({
            x: playerPos.x,
            y: playerPos.y - this.getImage().height
        });
    };
    Laser.prototype.update = function () {
        this.setPosition({
            x: this.getPosition().x,
            y: this.getPosition().y - this.speed
        });
        if (this.getPosition().y < 0) {
            this.getGame().destroy(this);
        }
    };
    Laser.prototype.collide = function (other) {
        if (other instanceof Alien) {
            console.log("Hit");
            this.getGame().destroy(other);
        }
    };
    return Laser;
}(GameObject));
export { Laser };
