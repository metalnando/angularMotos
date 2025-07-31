import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { CilindrajeCrearDTO } from '../cilindraje';
import { FormularioCilindraje } from '../formulario-cilindraje/formulario-cilindraje';

@Component({
  selector: 'app-crear-cilindraje',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormularioCilindraje],
  templateUrl: './crear-cilindraje.html',
  styleUrl: './crear-cilindraje.css'
})
export class CrearCilindraje {

  private router = inject(Router);

  
  guardarCambios(cilindraje: CilindrajeCrearDTO){
    // ... Guarda cambios
    //this.router.navigate(['/Motos']);
    //console.log(this.form.value)
     console.log("creando  el cilindraje", cilindraje);
  }

}
