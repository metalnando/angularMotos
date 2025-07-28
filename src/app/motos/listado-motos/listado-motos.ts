import { CurrencyPipe } from '@angular/common';
import { Component, input, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ListadoGenerico } from "../../compartidos/componentes/listado-generico/listado-generico";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listado-motos',
  imports: [CurrencyPipe, MatButtonModule, ListadoGenerico, MatIconModule],
  templateUrl: './listado-motos.html',
  styleUrl: './listado-motos.css',
})
export class ListadoMotos  {
  @Input({ required: true })
  moto!: any[];

  //   eliminarMoto(motico: any) {
  //   const index = this.moto.findIndex((mot: any) => mot.Marca === motico.Marca);
  //   this.moto.splice(index, 1);
  //   console.log('Moto eliminada:', index);
  // }

  // AgregarMoto() {
  //   this.moto.push({
  //     Marca: 'honda',
  //     Modelo: 'CBR600RR',
  //     Cilindrada: 600,
  //     Descripcion:
  //       'Una moto deportiva de alta gama con un motor potente y tecnología avanzada.',
  //   });
  // }
}


