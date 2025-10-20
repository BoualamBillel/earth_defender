export class Input {

    private static axisX: Direction = 0;
    public static getAxisX(): Direction {
        return this.axisX;
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
            
                default:
                    break;
            }
        })
        })
    }
}

export type Direction = 0 | 1 | -1;

