import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-editar-marca',
  imports: [],
  templateUrl: './editar-marca.html',
  styleUrl: './editar-marca.css'
})
export class EditarMarca {

  @Input({transform: numberAttribute})
  id!:number;

}
