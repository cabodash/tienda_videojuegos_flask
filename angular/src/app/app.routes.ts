import { Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { DetallesVideojuegoComponent } from './detalles-videojuego/detalles-videojuego.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PedidoComponent } from './pedido/pedido.component';

export const routes: Routes = [
    {path: "listado", component: ListadoComponent},
    {path: "carrito", component: CarritoComponent},
    {path: "pedido", component: PedidoComponent},
    {path: "detallesVideojuego/:id", component: DetallesVideojuegoComponent}
];
