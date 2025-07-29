import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-crear-moto',
  imports: [MatButtonModule,RouterLink],
  templateUrl: './crear-moto.html',
  styleUrl: './crear-moto.css'
})
export class CrearMoto {

}
