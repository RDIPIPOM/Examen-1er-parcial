export default class Chofer{
    constructor(numChofer, nombre){
        this._numChofer = numChofer;
        this._nombre = nombre;
    }

    get numChofer(){
        return this._numChofer;
    }

    get nombre(){
        return this._nombre;
    }

    set numChofer(numChofer){
        this._numChofer = numChofer;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}