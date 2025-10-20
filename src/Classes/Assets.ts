export class Assets {
    public static getDefaultImage() {
        const image: HTMLImageElement = document.querySelector("img#asset_default");
        if (image == null) {
            throw Error("No assets found");
        }
        return image;
    }

    public static getPlayerImage() {
        const image : HTMLImageElement = document.querySelector("img#asset_player");
        if (image == null) {
            throw Error ("No assets found");
        }
        return image;
     }

     public static getAlienImage() {
        const image : HTMLImageElement = document.querySelector("img#asset_alien");
         if (image == null) {
            throw Error ("No assets found");
        }
        return image;
     }
}