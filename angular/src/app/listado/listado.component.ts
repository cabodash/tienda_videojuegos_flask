import { Component } from '@angular/core';
import { TiendaService } from '../services/tienda.service';
import { Videojuego } from '../model/videojuego';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css',
})
export class ListadoComponent {
  videojuegos: Videojuego[] = {} as Videojuego[];

  constructor(private servicioTienda: TiendaService, private router: Router) {}

  ngOnInit(): void {
    console.log('desde ngOnInit del componente listado: ');
    console.log('Pedimos el listado ed productos al servicioTienda');
    this.servicioTienda.obtenerVideojuegos().subscribe((res) => {
      this.videojuegos = res; //En angular cuando queremos indicar que hacer cuando se obtenga una respuesta de la comunicacion con un servicio web se usa la formula indicada
    });
   
  }

  verDetalles(v: Videojuego): void {
    //Mostrar el componente de detalles Videojuego para el videojuego recibido
    this.router.navigate(['detallesVideojuego', v.id]);
  }
}
