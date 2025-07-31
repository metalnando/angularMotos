import { CilindrajeCrearDTO, cilindrajeDTO } from './../cilindraje';
import { Component, EventEmitter, inject, Input, NgModule, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CrearCilindraje } from '../crear-cilindraje/crear-cilindraje';

@Component({
  selector: 'app-formulario-cilindraje',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './formulario-cilindraje.html',
  styleUrl: './formulario-cilindraje.css'
})
export class FormularioCilindraje implements OnInit {
  ngOnInit(): void {
    if(this.modelo !== undefined)
      this.form.patchValue(this.modelo);
  }

  @Input()
  modelo?: cilindrajeDTO ;  

  @Output()
  posteoFormulario = new EventEmitter<CilindrajeCrearDTO>();

  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    nombre : ['', {validators: [Validators.required, primeraLetraMayuscula()]}]
  })

  obtenerErrorCampoNombre(){
    let nombre = this.form.controls.nombre;
    if (nombre.hasError('required')){
      return 'El campo es requerido'}
    if (nombre.hasError('primeraLetraMayuscula')){
      return nombre.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }

  guardarCambios(){

    if(!this.form.valid){
      return;
    }

    const cilindraje=this.form.value as CilindrajeCrearDTO;
    this.posteoFormulario.emit(cilindraje)
  }

}

