import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function primeraLetraMayuscula():ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        const valor= <string>control.value;

        if(!valor) return null;
        if(valor.length === 0) return null;
        
        const primeraLetra = valor[0];

        if(primeraLetra !== primeraLetra.toUpperCase())
        {
            return {
                primeraLetraMayuscula: {
                    mensaje: 'primera letra debe ser mayuscula'
                }
            }
        } 
        return null;
    }
}

export function fechaNoPuedeSerFutura(): ValidatorFn{
    return (control: AbstractControl):ValidationErrors | null => {
        const fechaEcogidaPorElUsuario = new Date (control.value);
        const hoy = new Date();

        if(fechaEcogidaPorElUsuario>hoy){
            return {
                futuro: {
                    mensaje: 'La fecha no puede ser del futuro'
                }
            }
        }
    return null;

    }

}