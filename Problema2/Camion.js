import Ruta from "./Ruta.js";
import Chofer from "./Chofer.js";

export default class Camion{
    constructor(numero, placas, chofer = new Chofer(), ruta = new Ruta()){
        this._numero = numero;
        this._placas = placas;
        this._chofer = chofer;
        this._ruta = ruta;        
    }

    get numero(){
        return this._numero;
    }

    get placas(){
        return this._placas;
    }

    get chofer(){
        return this._chofer;
    }

    get ruta(){
        return this._ruta;
    }

    set numero(numero){
        this._numero = numero;
    }

    set placas(placas){
        this._placas = placas;
    }

    set chofer(chofer){
        this._chofer = chofer;
    }

    set ruta(ruta){
        this._ruta = ruta;
    }
}