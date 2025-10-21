export class Input {

    private static axisX: Direction = 0;
    private static isShooting : boolean = false;

    public static getAxisX(): Direction {
        return this.axisX;
    }
    public static getIsShooting() : boolean {
        return Input.isShooting;
    }
    public static listen() {
        // Sur appuie
        window.addEventListener("keydown", (event) => {
            switch (event.key) {
                // Va à Droite
                case "q":
                case "Q":
                    this.axisX = -1;
                    break;
                // Va à Gauche
                case "d":
                case "d":
                    this.axisX = 1;
                    break;
                // Tir un laser
                case " ":
                    Input.isShooting = true;
                    break;
                default:
                    break;
            }
        // Au relachement
        window.addEventListener("keyup", (event) => {
            switch (event.key) {
                // S'arrete
                case "q":
                case "Q":
                case "d":
                case "D":
                    this.axisX = 0;
                    break;
                case " ":
                    Input.isShooting = false;
            
                default:
                    break;
            }
        })
        })
    }
}

export type Direction = 0 | 1 | -1;

