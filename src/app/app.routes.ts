import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { IndiceMarcas } from './marcas/indice-marcas/indice-marcas';
import { CrearMarcas } from './marcas/crear-marcas/crear-marcas';
import { CrearMoto } from './motos/crear-moto/crear-moto';
import { CrearCilindraje } from './cilindraje/crear-cilindraje/crear-cilindraje';
import { IndiceCilindraje } from './cilindraje/indice-cilindraje/indice-cilindraje';
import { EditarCilindraje } from './cilindraje/editar-cilindraje/editar-cilindraje';
import { EditarMarca } from './marcas/editar-marca/editar-marca';
import { EditarMoto } from './motos/editar-moto/editar-moto';
import { IndiceMotos } from './motos/indice-motos/indice-motos';

export const routes: Routes = [
    {path: '', component: LandingPage},
    {path: 'marcas', component:IndiceMarcas }, 
    {path:'marcas/crear', component: CrearMarcas},
    {path: 'marcas/editar/:id', component: EditarMarca},    
    {path: 'cilindraje', component: IndiceCilindraje},
    {path: 'cilindraje/crear', component:CrearCilindraje},
    {path: 'cilindraje/editar/:id', component: EditarCilindraje},
    {path: 'Motos', component:IndiceMotos},
    {path: 'Motos/crear', component: CrearMoto},
    {path: 'Motos/editar/:id', component:EditarMoto},
    {path: '**', component: CrearMoto}
];
