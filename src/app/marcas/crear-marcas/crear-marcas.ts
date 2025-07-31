import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { FormularioMarcas } from "../formulario-marcas/formulario-marcas";
import { marcasCrearDto } from '../marcasDto';

@Component({
  selector: 'app-crear-marcas',
  imports: [MatButtonModule, FormularioMarcas],
  templateUrl: './crear-marcas.html',
  styleUrl: './crear-marcas.css'
})
export class CrearMarcas {

  router = inject(Router);

  guardarCambios(marca: marcasCrearDto) {
    // ... Gruarda cambios
    //this.router.navigate(['/marcas']);
    console.log('Creando marcas en DTO', marca)
} 
}
