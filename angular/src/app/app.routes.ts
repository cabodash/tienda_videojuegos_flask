import { Routes } from '@angular/router';
import { DetallesVideojuegoComponent } from './detalles-videojuego/detalles-videojuego.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PedidoComponent } from './pedido/pedido.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';

export const routes: Routes = [
    {path: "listado", component: VideojuegosComponent},
    {path: "carrito", component: CarritoComponent},
    {path: "pedido", component: PedidoComponent},
    {path: "detallesVideojuego/:id", component: DetallesVideojuegoComponent}
];
