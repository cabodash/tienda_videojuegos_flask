import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, VideojuegosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular_videojuegos';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['listado']);
  }
}
