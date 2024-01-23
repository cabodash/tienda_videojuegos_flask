import { Injectable } from '@angular/core';
import { Videojuego } from '../model/videojuego';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VideojuegoCarrito } from '../model/videojuegoCarrito';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root',
})
export class TiendaService {
  //ruta_webservices = '/'; //esto es para el hosting
  ruta_webservices = '/web-services/'; //esto es para local

  //Todas las operaciones con el servidor se realizaran desde este servicio
  constructor(private http: HttpClient) { }

  obtenerVideojuegos(): Observable<Videojuego[]> {
    console.log(
      'comunicar con el servicioWeb para obtener el json de videojuegos'
    );

    return this.http.get<Videojuego[]>(
      this.ruta_webservices + 'obtener-videojuegos'
    );
  }
  obtenerVideojuegoPorId(id: number): Observable<Videojuego> {
    return this.http.get<Videojuego>(
      this.ruta_webservices + `obtener-videojuego-id/${id}`
    );
  }

  agregarAlCarrito(id: number, cantidad: number): Observable<any> {
    let data = {
      id: id,
      cantidad: cantidad
    }
    return this.http.post<any>(
      `${this.ruta_webservices}agregar-al-carrito`, data);
  }
  obtenerVideojuegosCarrito(): Observable<VideojuegoCarrito[]> {
    return this.http.get<VideojuegoCarrito[]>(
      `${this.ruta_webservices}obtener-productos-carrito`
    );
  }
  registrarPedido(p: Pedido): Observable<string> {
    return this.http.post<string>(
      this.ruta_webservices + 'realizar-pedido',
      p
    );
  }

  vaciarCarrito(): Observable<string> {
    return this.http.get<string>(
      this.ruta_webservices + 'vaciar-carrito'
    );
  }

  borrarProducto(id: number): Observable<string> {
    const data = { id: id }; // Crear un objeto con la propiedad id
    return this.http.post<string>(
      this.ruta_webservices + 'borrar-producto',
      data  // Enviar el objeto en lugar del id directamente
    );
  }
}
