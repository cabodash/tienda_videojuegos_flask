import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videojuego } from '../model/videojuego';
import { TiendaService } from '../services/tienda.service';
import { PrepararReproductores } from '../utils/PrepararReproductores';
import { Mensajes } from '../utils/Mensajes';

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
  cantidad: number = 1;
  @ViewChildren('video') videojuegosItems: QueryList<ElementRef>;

  private ejecutarFuncion = true;

  //ActivatedRoute saca la id que le llega al componente detallesVideojuego
  constructor(
    private servicioTienda: TiendaService,
    private activatedRoute: ActivatedRoute
  ) {
    this.videojuegosItems = new QueryList<ElementRef>();
  }

  ngOnInit(): void {
    this.idVideojuego = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.servicioTienda
      .obtenerVideojuegoPorId(this.idVideojuego)
      .subscribe((res) => (this.videojuego = res));
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

  aumentarCantidad(): void {
    if (this.cantidad < 10) {
      this.cantidad++;
    } else {
      Mensajes.error(`La cantidad no puede ser mayor de 10`)
    }
  }
  disminuirCantidad(): void {
    if (this.cantidad > 1) {
      this.cantidad--;
    } else {
      Mensajes.error(`La cantidad no puede ser menor de 1`)
    }
  }

  agregarAlCarrito(): void {
    let mensaje: string = ""
    if (this.cantidad == 1){
      mensaje = "Añadido 1 producto al carrito"
    }else{
      mensaje = `Añadidos ${this.cantidad} productos al carrito`
    }
    this.servicioTienda
      .agregarAlCarrito(this.idVideojuego, this.cantidad)
      .subscribe((res) =>
        res == 'ok'
          ?  Mensajes.info(mensaje)
          :  Mensajes.error(`Ocurrio un problema al agregar al carrito`)
      );
    
  }
}
