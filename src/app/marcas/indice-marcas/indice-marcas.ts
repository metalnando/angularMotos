import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-indice-marcas',
  imports: [ RouterLink, MatButtonModule],
  templateUrl: './indice-marcas.html',
  styleUrl: './indice-marcas.css'
})
export class IndiceMarcas {

}
