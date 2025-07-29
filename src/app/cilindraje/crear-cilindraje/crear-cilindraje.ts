import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-crear-cilindraje',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './crear-cilindraje.html',
  styleUrl: './crear-cilindraje.css'
})
export class CrearCilindraje {

  private router = inject(Router);

  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    nombre : ['', {validators: [Validators.required]}]
  })

  obtenerErrorCampoNombre(){
    let nombre = this.form.controls.nombre;
    if (nombre.hasError('required')){
      return 'El campo nombre es requeridoEl campo nombre es requeridoEl campo nombre es requeridoEl campo nombre es requeridoEl campo nombre es requeridoEl campo nombre es requeridoEl campo nombre es requeridoEl campo nombre es requeridoEl campo nombre es requeridoEl campo nombre es requeridoEl campo nombre es requeridoEl campo nombre es requeridoEl campo nombre es requeridoEl campo nombre es requeridoEl campo nombre es requeridoEl campo nombre es requeridoEl campo nombre es requeridoEl campo nombre es requeridoEl campo nombre es requerido';
    }
    return '';
  }



  guardarCambios(){
    // ... Guarda cambios
    //this.router.navigate(['/Motos']);
    console.log(this.form.value);
  }

}
