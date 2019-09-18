export default class Ruta{
    constructor(nombre, ruta, duracion, basesRecorrido = new Array()){
        this._nombre = nombre;
        this._ruta = ruta;
        this._duracion = duracion;
        this._basesRecorrido = basesRecorrido;
        this._horaSalida = horaSalida;
        this._horaFin = horaFin;
    }

    get nombre(){
        return this._nombre;
    }

    get ruta(){
        return this._ruta;
    }

    get duracion(){
        return this._duracion;
    }

    get basesRecorrido(){
        return this._basesRecorrido;
    }

    get horaFin(){
        return this._horaFin;
    }

    get horaSalida(){
        return this._horaFin;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set ruta(ruta){
        this._ruta = ruta;
    }

    set duracion(duracion){
        this._duracion = duracion;
    }

    set basesRecorrido(basesRecorrido){
        this._basesRecorrido = basesRecorrido;
    }

    set horaSalida(horaSalida){
        this._horaSalida = horaSalida;
    }

    set horaFin(horaFin){
        this._horaFin = horaFin;
    }
}