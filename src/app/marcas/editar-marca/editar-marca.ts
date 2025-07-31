import { marcasCrearDto, marcasDto } from './../marcasDto';
import { Component, Input, numberAttribute } from '@angular/core';
import { FormularioMarcas } from "../formulario-marcas/formulario-marcas";

@Component({
  selector: 'app-editar-marca',
  imports: [FormularioMarcas],
  templateUrl: './editar-marca.html',
  styleUrl: './editar-marca.css'
})
export class EditarMarca {

  @Input({transform: numberAttribute})
  id!:number;

  marca : marcasDto = {id: 1, nombre: "Clasica", fechaCreacion: new Date(1991, 0, 25)}
 
  guardarCambios(marca: marcasCrearDto){
    console.log('Editando la marca', marca)

  }

}
