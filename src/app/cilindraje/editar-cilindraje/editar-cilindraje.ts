import { Component, Input, numberAttribute } from '@angular/core';
import { FormularioCilindraje } from "../formulario-cilindraje/formulario-cilindraje";
import { CilindrajeCrearDTO, cilindrajeDTO } from '../cilindraje';

@Component({
  selector: 'app-editar-cilindraje',
  imports: [FormularioCilindraje],
  templateUrl: './editar-cilindraje.html',
  styleUrl: './editar-cilindraje.css'
})
export class EditarCilindraje {

  @Input({transform: numberAttribute})
  id!:number;

  cilindraje  : cilindrajeDTO={id:1, nombre:'Suzuki', cilindraje:1300}

  guardarCambios(genero: CilindrajeCrearDTO)
  {
    console.log('Editando Genero', genero);
  }

}
