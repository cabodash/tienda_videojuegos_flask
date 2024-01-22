import { Component } from '@angular/core';
import { VideojuegoCarrito } from '../model/videojuegoCarrito';
import { TiendaService } from '../services/tienda.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
})
export class CarritoComponent {
  videojuegosCarrito: VideojuegoCarrito[] = {} as VideojuegoCarrito[];

  constructor(private servicioTienda: TiendaService, private router:Router) {}

  ngOnInit(): void {
    this.listarVideojuegosCarrito();
  }

  listarVideojuegosCarrito() {
    //Pedir los VideojuegosCarrito al servicioTienda
    this.servicioTienda
      .obtenerVideojuegosCarrito()
      .subscribe((res) => (this.videojuegosCarrito = res));
  }
  vaciarCarrito() {
    this.servicioTienda
      .vaciarCarrito()
      .subscribe(res => (res == "ok")?this.videojuegosCarrito = []:alert("No se pudo vaciar el carrito"));
  }
  realizarPedido(){
    if( this.videojuegosCarrito.length === undefined || this.videojuegosCarrito.length == 0  ){
      alert("agrega por lo menos un producto al carrito " + 
      "para realizar un pedido")
      return
    }
    this.router.navigate(["pedido"])
  }
  borrarProducto(idVideojuego:number){
    this.servicioTienda.borrarProducto(idVideojuego)
    .subscribe(res => {
      if (res == "ok") {
        alert("Producto borrado")
        location.reload();
      } else {
        alert("No se pudo borrar el videojuego");
      }
    })
  }
}
