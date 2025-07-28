import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { IndiceMarcas } from './marcas/indice-marcas/indice-marcas';
import { CrearMarcas } from './marcas/crear-marcas/crear-marcas';
import { CrearMoto } from './motos/crear-moto/crear-moto';
import { CrearCilindraje } from './cilindraje/crear-cilindraje/crear-cilindraje';
import { IndiceCilindraje } from './cilindraje/indice-cilindraje/indice-cilindraje';

export const routes: Routes = [
    {path: '', component: LandingPage},
    {path: 'marcas', component:IndiceMarcas }, 
    {path:'marcas/crear', component: CrearMarcas},    
    {path: 'Cilindraje', component: IndiceCilindraje},
    {path: 'cilindrada/Crear', component:CrearCilindraje},
    {path: 'Motos/crear-moto', component: CrearMoto},

];
