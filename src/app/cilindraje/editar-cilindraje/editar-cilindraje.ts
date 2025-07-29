import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-editar-cilindraje',
  imports: [],
  templateUrl: './editar-cilindraje.html',
  styleUrl: './editar-cilindraje.css'
})
export class EditarCilindraje {

  @Input({transform: numberAttribute})
  id!:number;

}
