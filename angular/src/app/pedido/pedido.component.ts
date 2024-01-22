import { Component, Injectable } from '@angular/core';
import { Pedido } from '../model/pedido';
import { FormsModule } from '@angular/forms';
import { TiendaService } from '../services/tienda.service';
import { Router } from '@angular/router';
import { Validador } from '../validations/validador';
import { formulario_inputs } from '../utils/formulario_inputs';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [FormsModule], //FormsModule es encesario para poder usar ngModel en el html
  providers: [formulario_inputs],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css',
})


@Injectable({
  providedIn: 'root'
})
export class PedidoComponent {
  pedido: Pedido = {} as Pedido;

  constructor(
    private validador: Validador,
    private servicioTienda: TiendaService,
    private router: Router,
    private formulario_inputs:formulario_inputs
  ) {}

  ngOnInit(): void {
    this.formulario_inputs.inputs();
  }

  

  finalizarPedido() {
    console.log('mandar a servidor: ');
    console.log(this.pedido);

    //Validar la informacion
    if (
      this.validador.validarNombre(this.pedido.nombre) &&
      this.validador.validarApellidos(this.pedido.apellidos) &&
      this.validador.validarDireccion(this.pedido.direccion) &&
      this.validador.validarTarjeta(this.pedido.tarjeta) &&
      this.validador.validarComentario(this.pedido.comentario) 
    ) {
      this.servicioTienda
        .registrarPedido(this.pedido)
        .subscribe((res) =>
          res == 'ok'
            ? this.pedidoOk()
            : alert('no se pudo registrar el pedido')
        );
    }
  }

  pedidoOk() {
    alert('pedido realizado correctamente');
    this.router.navigate(['listado']);
  }
}


