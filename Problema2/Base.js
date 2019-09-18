export default class Base{
    constructor(nombre, referencia, latitud, longitud){
        this._nombre = nombre;
        this._referencia = referencia;
        this._latitud = latitud;
        this._longitud = longitud;
    }

    get nombre(){
        return this._nombre;
    }

    get referencia(){
        return this._referencia;
    }

    get latitud(){
        return this._latitud;
    }

    get longitud(){
        return this._longitud;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set referencia(referencia){
        this._referencia = referencia;
    }

    set latitud(latitud){
        this._latitud = latitud;
    }

    set longitud(longitud){
        this._longitud = longitud;
    }
}