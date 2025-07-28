import { CurrencyPipe } from '@angular/common';
import { Component, input, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ListadoMotos } from "./motos/listado-motos/listado-motos";
import { Menu } from "./compartidos/componentes/menu/menu";
import { Rating } from "./compartidos/componentes/rating/rating";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ListadoMotos, Menu, Rating, MatButtonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App   {
 

}
