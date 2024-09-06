"use strict";
class Salida {
    constructor() {
        this.mensaje = "";
    }
    agregar(mensaje) {
        this.mensaje += mensaje.split('').reverse().join('');
        return this;
    }
    filtrar() {
        this.mensaje = this.mensaje.split('')
            .map((char, index) => index % 2 === 0 ? char.toLowerCase() : char.toUpperCase())
            .map((char) => char.toLowerCase())
            .join('');
        return this;
    }
    convertir() {
        this.mensaje = this.mensaje.split('').join('');
        return this;
    }
    invertir() {
        let mensajeInvertido = "";
        for (let i = this.mensaje.length - 1; i >= 0; i--) {
            mensajeInvertido += this.mensaje[i];
        }
        this.mensaje = mensajeInvertido;
        return this;
    }
    imprimir() {
        console.log(this.mensaje);
    }
}
Salida.prototype.mundo = function (mensaje) {
    this.agregar(mensaje)
        .filtrar()
        .convertir()
        .invertir()
        .imprimir();
};
const hola = new Salida();
hola.mundo("holaaa");
