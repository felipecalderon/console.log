interface SalidaConMundo extends Salida {
    mundo(mensaje: string): void;
}

class Salida {
    private mensaje: string = "";

    constructor() { }

    public agregar(mensaje: string): this {
        this.mensaje += mensaje.split('').reverse().join('');
        return this;
    }

    public filtrar(): this {
        this.mensaje = this.mensaje.split('')
            .map((char, index) => index % 2 === 0 ? char.toLowerCase() : char.toUpperCase())
            .map((char) => char.toLowerCase())
            .join('');
        return this;
    }

    public convertir(): this {
        this.mensaje = this.mensaje.split('').join('');
        return this;
    }

    public invertir(): this {
        let mensajeInvertido = "";
        for (let i = this.mensaje.length - 1; i >= 0; i--) {
            mensajeInvertido += this.mensaje[i];
        }
        this.mensaje = mensajeInvertido;
        return this;
    }

    public imprimir(): void {
        console.log(this.mensaje);
    }
}

(Salida.prototype as SalidaConMundo).mundo = function (mensaje: string) {
    this.agregar(mensaje)
        .filtrar()
        .convertir()
        .invertir()
        .imprimir();
};

const hola = new Salida() as SalidaConMundo;
hola.mundo("holaaa");
