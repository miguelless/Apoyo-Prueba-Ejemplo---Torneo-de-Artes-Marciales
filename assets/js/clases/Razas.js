import Personaje from "./Personaje.js";

class Saiyajin extends Personaje{
    constructor(nombre, img, poder, raza){
        super(nombre, img, poder, raza)
    }

    Transformacion(){
        let poder = this.getPoder();
        this.setPoder(parseFloat(poder * 1.8).toFixed(0));
    }
}

class Humano extends Personaje{
    constructor(nombre, img, poder, raza){
        super(nombre, img, poder, raza)
    }

    Coraje(){
        let poder = this.getPoder();
        this.setPoder(parseFloat(poder * 1.2).toFixed(0));
    }
}

export { Saiyajin, Humano}

//console.log(new Humano("krilin", "...", 123123, "...."));