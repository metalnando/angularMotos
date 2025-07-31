import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FormularioMarcas } from "../../marcas/formulario-marcas/formulario-marcas";

@Component({
  selector: 'app-crear-moto',
  imports: [MatButtonModule, RouterLink, FormularioMarcas],
  templateUrl: './crear-moto.html',
  styleUrl: './crear-moto.css'
})
export class CrearMoto {

}
