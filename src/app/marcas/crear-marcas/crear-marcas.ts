import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-marcas',
  imports: [MatButtonModule],
  templateUrl: './crear-marcas.html',
  styleUrl: './crear-marcas.css'
})
export class CrearMarcas {

  router = inject(Router);

  guardarCambios() {
    // ... Gruarda cambios
    this.router.navigate(['/marcas']);
}
}
