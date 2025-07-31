import { marcasCrearDto, marcasDto } from './../marcasDto';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import moment from 'moment';
import { fechaNoPuedeSerFutura } from '../../compartidos/funciones/validaciones';

@Component({
  selector: 'app-formulario-marcas',
  imports: [MatButtonModule, MatInputModule, MatDatepickerModule, ReactiveFormsModule, RouterLink],
  templateUrl: './formulario-marcas.html',
  styleUrl: './formulario-marcas.css'
})
export class FormularioMarcas implements OnInit{
  ngOnInit(): void {
  if(this.modelo !== undefined)
    this.form.patchValue(this.modelo);
  }

  @Input()
  modelo?: marcasDto;


  @Output()
  posteoFormulario= new EventEmitter<marcasCrearDto>();
  
  private FormBuilder= inject(FormBuilder);

    form = this.FormBuilder.group({
      nombre: ['', {
        validators:[Validators.required]
      }],
      fechaCreacion: new FormControl<Date | null>(null, {validators: [Validators.required, fechaNoPuedeSerFutura()]})
    })

    guardarCambios(){
      if(!this.form.value)
       return; 
      
      const marca= this.form.value as marcasCrearDto;
      marca.fechaCreacion = moment(marca.fechaCreacion).toDate(); 
      this.posteoFormulario.emit(marca);
      
    }

}
