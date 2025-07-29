import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-editar-moto',
  imports: [],
  templateUrl: './editar-moto.html',
  styleUrl: './editar-moto.css'
})
export class EditarMoto {
  @Input({transform: numberAttribute})
  id!:number;
}
