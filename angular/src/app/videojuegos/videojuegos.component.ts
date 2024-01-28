import { AfterViewChecked, Component, ElementRef, Injectable, QueryList, ViewChildren } from '@angular/core';
import { Videojuego } from '../model/videojuego';
import { TiendaService } from '../services/tienda.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-videojuegos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './videojuegos.component.html',
  styleUrl: './videojuegos.component.css'
})
export class VideojuegosComponent implements AfterViewChecked {
  videojuegos: Videojuego[] = {} as Videojuego[];
  timeout: any;
  @ViewChildren('video') videojuegosItems: QueryList<ElementRef>;
  
  
  private ejecutarFuncion = true;



  constructor(private servicioTienda: TiendaService, private router: Router) { 
    this.videojuegosItems = new QueryList<ElementRef>();
  }

  ngOnInit(): void {
    console.log('desde ngOnInit del componente listado: ');
    console.log('Pedimos el listado ed productos al servicioTienda');
    this.actualizarListado();

  }

  ngAfterViewInit() {
   this.prepararReproductores();
  }
  
  ngAfterViewChecked() {
    if (this.ejecutarFuncion) {
      this.prepararReproductores();
      this.ejecutarFuncion = false;
    }
  }


  actualizarListado() {
    this.servicioTienda.obtenerVideojuegos(null).subscribe((res) => {
      this.videojuegos = res; //En angular cuando queremos indicar que hacer cuando se obtenga una respuesta de la comunicacion con un servicio web se usa la formula indicada
    });
  }

  onInput(event: any) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.buscar();
    }, 500);
  }

  buscar() {
    let busqueda = (document.getElementById('buscador') as HTMLInputElement)?.value;
    this.servicioTienda.obtenerVideojuegos(busqueda).subscribe((res) => {
      this.videojuegos = res;
      this.ejecutarFuncion = true;
    });
  }

  verDetalles(v: Videojuego): void {
    //Mostrar el componente de detalles Videojuego para el videojuego recibido
    this.router.navigate(['detallesVideojuego', v.id]);
  }


  

//Funcion para preparar la reproduccion de los videos 
  prepararReproductores(){
    this.videojuegosItems.forEach(videojuegosItems => {
      const video = videojuegosItems.nativeElement.querySelector('video');
      const reproductor = videojuegosItems.nativeElement;
  
      if (video) {
        video.addEventListener('canplaythrough', () => {
          video.play();
        });
  
        video.pause();
  
        reproductor.addEventListener('mouseenter', () => {
          if (video && video.readyState >= 2) {
            video.play();
            reproductor.querySelector('.imagen-item').style.opacity = 0;
            reproductor.querySelector('.imagen-item').style.visibility = 'hidden';
            reproductor.querySelector('.video-item').style.opacity = 1;
            reproductor.querySelector('.video-item').style.visibility = 'visible';
          }
        });
  
        reproductor.addEventListener('mouseleave', () => {
          if (video && video.readyState >= 2) {
            video.pause();
            reproductor.querySelector('.imagen-item').style.opacity = 1;
            reproductor.querySelector('.imagen-item').style.visibility = 'visible';
            reproductor.querySelector('.video-item').style.opacity = 0;
            reproductor.querySelector('.video-item').style.visibility = 'hidden';
          }
        });
  
        video.addEventListener('ended', () => {
          video.currentTime = 0;
          video.play();
        });
      }
    });
  }

}
