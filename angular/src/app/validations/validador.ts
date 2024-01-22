import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})


export class Validador {

    regexp_nombre: RegExp = /^[a-z áéíóú]{2,20}$/g;
    regexp_ape: RegExp = /^[a-z áéíóú]{2,30}$/g;
    regexp_direccion: RegExp = /^[a-zA-Z0-9 .,áéíóúñ\\:/ºª]{5,50}$/;
    regexp_numero_tarjeta: RegExp = /^[0-9]{16}$/;
    regexp_com: RegExp = /^[a-z .,áéíóú]{2,200}$/g;



    validarNombre(nombre: string): boolean {
        if (nombre === undefined) {
            alert("El nombre no debe estar vacio");
            return false;
        }
        if (this.regexp_nombre.test(nombre)) {
            return true;
        } else {
            alert("Nombre debe tener de 2 a 20 caracteres y solo debe tener letras");
            return false;
        }
    }

    validarApellidos(apellidos: string): boolean {
        if (apellidos === undefined) {
            alert("Los apellidos no deben estar vacios");
            return false;
        }
        if (this.regexp_ape.test(apellidos)) {
            return true;
        } else {
            alert("Los apellidos deben tener de 2 a 30 caracteres y solo deben tener letras");
            return false;
        }
    }

    validarDireccion(direccion: string): boolean {
        if (direccion === undefined) {
            alert("La direccion no debe estar vacia");
            return false;
        }
        if (this.regexp_direccion.test(direccion)) {
            return true;
        } else {
            alert("Direccion debe tener de 5 a 50 caracteres y solo debe tener letras, numeros, espacios y los carqacteres / \\ : º ª");
            return false;
        }
    }

    validarTarjeta(tarjeta: string): boolean {
        if (tarjeta === undefined) {
            alert("La tarjeta no debe estar vacia");
            return false;
        }
        if (this.regexp_numero_tarjeta.test(tarjeta)) {
            return true;
        } else {
            alert("El numero de tarjeta solo puede ser numeros y ser de 16 caracteres");
            return false;
        }
    }

    validarComentario(com: string): boolean {
        if (com === undefined) {
            alert("El comentario no debe estar vacio");
            return false;
        }
        if (this.regexp_com.test(com)) {
            return true;
        } else {
            alert("El comentario solo puede letras, puntos y comas y ser de maximo 200 caracteres");
            return false;
        }
    }



}