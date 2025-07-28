import { Component, OnInit } from '@angular/core';
import { ListadoMotos } from "../motos/listado-motos/listado-motos";

@Component({
  selector: 'app-landing-page',
  imports: [ListadoMotos],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage implements OnInit {
    ngOnInit(): void {
    setTimeout(() => {
      this.motoDisponible = [
        {
          Marca: 'Honda',
          Modelo: 'CB500F',
          Cilindrada: 500,
          imagen:
            'https://www.motofichas.com/images/phocagallery/Honda/cb500x-2022/01-honda-cb500x-2022-estudio-rojo.jpg',
          descripcion:
            'La CB500F es una moto naked que combina estilo y rendimiento, ideal para la ciudad y el uso diario.',
          precio: 6000,
        },
        {
          Marca: 'Yamaha',
          Modelo: 'MT-07',
          Cilindrada: 689,
          imagen:
            'https://images.ctfassets.net/8zlbnewncp6f/2mpfSORdowAf7bOITxM9wo/ac02f58ba1c81b362c5af25c07505abb/Yamaha_MT_07_2024_Imagen_principal.jpg',
          descripcion:
            'La MT-07 es una moto naked con un motor potente y ágil, perfecta para los amantes de la conducción deportiva.',
          precio: 7500,
        },
        {
          Marca: 'Kawasaki',
          Modelo: 'Z650',
          Cilindrada: 649,
          imagen:
            'https://www.mundomotero.com/wp-content/uploads/2018/06/Kawasaki-Z650-2020.jpg',
          descripcion:
            'La Z650 es una moto naked que ofrece un equilibrio perfecto entre potencia y maniobrabilidad, ideal para principiantes y expertos.',
          precio: 7000,
        },
        {
          Marca: 'Suzuki',
          Modelo: 'SV650',
          Cilindrada: 645,
          imagen:
            'https://upload.wikimedia.org/wikipedia/commons/7/77/Suzuki_SV650.jpg',
          descripcion:
            'La SV650 es una moto naked con un motor V-twin que proporciona una experiencia de conducción emocionante y versátil.',
          precio: 7200,
        },
      ];

      this.motoEnVenta = [
        {
          Marca: 'Suzuki',
          Modelo: 'SV650',
          Cilindrada: 645,
          imagen:
            'https://upload.wikimedia.org/wikipedia/commons/7/77/Suzuki_SV650.jpg',
          descripcion:
            'La SV650 es una moto naked con un motor V-twin que proporciona una experiencia de conducción emocionante y versátil.',
          precio: 7200,
        },
        {
          Marca: 'Yamaha',
          Modelo: 'MT-07',
          Cilindrada: 689,
          imagen:
            'https://http2.mlstatic.com/D_NQ_NP_736500-MLM74723591747_022024-O.webp',
          descripcion:
            'La MT-07 es una moto ágil y ligera con un motor bicilíndrico que ofrece un excelente equilibrio entre potencia y control.',
          precio: 7500,
        },
        {
          Marca: 'Kawasaki',
          Modelo: 'Z650',
          Cilindrada: 649,
          imagen:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdjHmUBW2cwBkuF8oWFYLYjqvZYAQbuVK2HQ&s',
          descripcion:
            'La Z650 destaca por su diseño agresivo y moderno, combinando rendimiento deportivo con facilidad de manejo.',
          precio: 7700,
        },
        {
          Marca: 'Honda',
          Modelo: 'CB650R',
          Cilindrada: 649,
          imagen:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqH14TVHlCHrY4xalV70hq6Qf_eFd9J8Q7AA&s',
          descripcion:
            'La CB650R ofrece un estilo neo-retro junto con una entrega de potencia suave y una gran calidad de construcción.',
          precio: 8800,
        },
        {
          Marca: 'Ducati',
          Modelo: 'Monster 797',
          Cilindrada: 803,
          imagen:
            'https://www.motofichas.com/images/phocagallery/Ducati_Motor_Holding_SpA/Monster_797/01-ducati-monster-797-2017.jpg',
          descripcion:
            'La Monster 797 combina el icónico estilo Ducati con un motor L-twin que entrega emoción pura en cada aceleración.',
          precio: 9500,
        },
      ];
    }, 100);
  }
  motoDisponible!: any[];
  motoEnVenta!: any[];
 
  procesarVoto(voto: number) {
    alert(`Has votado con un rating de ${voto}`);
  }
}
