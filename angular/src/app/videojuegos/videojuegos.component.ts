import { AfterViewChecked, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Videojuego } from '../model/videojuego';
import { TiendaService } from '../services/tienda.service';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { PrepararReproductores } from '../utils/PrepararReproductores';

@Component({
  selector: 'app-videojuegos',
  standalone: true,
  imports: [NgFor, NgIf],
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
   PrepararReproductores.prepararReproductores(this.videojuegosItems);
  }
  

  //Cada vez que se actualice la vista si es por una busqeda vuelve a cargar los reproductores (Por medio del uso de la variable ejecutarFuncion)
  ngAfterViewChecked() {
    if (this.ejecutarFuncion) {
      PrepararReproductores.prepararReproductores(this.videojuegosItems);
      this.ejecutarFuncion = false; // De no limitar la ejecucuin de la funcion, se genera un bucle infinito y deja la pagina sin responder
    }
  }


  actualizarListado() {
    this.servicioTienda.obtenerVideojuegos(null).subscribe((res) => {
      this.videojuegos = res; //En angular cuando queremos indicar que hacer cuando se obtenga una respuesta de la comunicacion con un servicio web se usa la formula indicada
      this.ejecutarFuncion = true;
    });
  }

  verDetalles(v: Videojuego): void {
    //Mostrar el componente de detalles Videojuego para el videojuego recibido
    this.router.navigate(['detallesVideojuego', v.id]);
  }

  //Timer para ejecutaqr la busqueda medio segundo despues de que el usuario deje de teclear
  onInput(event: any) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.buscar();
    }, 500);
  }

  //Actualiza el valor de la variable videojuegos filtrado por busqueda
  buscar() {
    let busqueda = (document.getElementById('buscador') as HTMLInputElement)?.value;
    this.servicioTienda.obtenerVideojuegos(busqueda).subscribe((res) => {
      this.videojuegos = res;
      this.ejecutarFuncion = true;
    });
  }

  //Funcion para borrar el contenido del input buscador al hacer click en la imagen de borrar
  borrarBusqueda() {
    (document.getElementById('buscador') as HTMLInputElement).value = '';
    this.buscar();
  }






}
