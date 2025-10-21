var Input = /** @class */ (function () {
    function Input() {
    }
    Input.getAxisX = function () {
        return this.axisX;
    };
    Input.getIsShooting = function () {
        return Input.isShooting;
    };
    Input.listen = function () {
        var _this = this;
        // Sur appuie
        window.addEventListener("keydown", function (event) {
            switch (event.key) {
                // Va à Droite
                case "q":
                case "Q":
                    _this.axisX = -1;
                    break;
                // Va à Gauche
                case "d":
                case "d":
                    _this.axisX = 1;
                    break;
                // Tir un laser
                case " ":
                    Input.isShooting = true;
                    break;
                default:
                    break;
            }
            // Au relachement
            window.addEventListener("keyup", function (event) {
                switch (event.key) {
                    // S'arrete
                    case "q":
                    case "Q":
                    case "d":
                    case "D":
                        _this.axisX = 0;
                        break;
                    case " ":
                        Input.isShooting = false;
                    default:
                        break;
                }
            });
        });
    };
    Input.axisX = 0;
    Input.isShooting = false;
    return Input;
}());
export { Input };
