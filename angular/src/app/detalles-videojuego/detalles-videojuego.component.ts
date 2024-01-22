import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videojuego } from '../model/videojuego';
import { TiendaService } from '../services/tienda.service';

@Component({
  selector: 'app-detalles-videojuego',
  standalone: true,
  imports: [],
  templateUrl: './detalles-videojuego.component.html',
  styleUrl: './detalles-videojuego.component.css',
})
export class DetallesVideojuegoComponent {
  idVideojuego: number = 0;
  videojuego: Videojuego = {} as Videojuego;

  //ActivatedRoute saca la id que le llega al componente detallesVideojuego
  constructor(
    private servicioTienda: TiendaService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idVideojuego = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.servicioTienda
      .obtenerVideojuegoPorId(this.idVideojuego)
      .subscribe((res) => (this.videojuego = res));
  }

  agregarAlCarrito(): void {
    this.servicioTienda
      .agregarAlCarrito(this.idVideojuego, 1)
      .subscribe((res) =>
        res == 'ok'
          ? alert('producto agregado el carrito')
          : alert('No se pudo agregar al carrito')
      );
  }
}
