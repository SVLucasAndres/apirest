// Importa el servicio APIServiceService y el decorador Component desde los módulos de Angular.
import { PokeapiService } from './../Services/apiservice.service';
import { Component } from '@angular/core';

// Define el componente HomePage con su selector, plantilla y estilos.
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  entrada1: string = "";
  entrada2: string = "";
  pokemon1: any;
  pokemon2: any;
  bounceClass: boolean = false;

  constructor(private api: PokeapiService) {}

  getPokemonDataID() {
    this.api.getPokemonID(+this.entrada1).subscribe((response) => {
      this.pokemon1 = response;
      console.log(this.pokemon1);
      this.applyBounceAnimation();
    });
  }

  getPokemonDataName() {
    this.api.getPokemonName(this.entrada2.toLowerCase()).subscribe((response) => {
      this.pokemon2 = response;
      console.log(this.pokemon2);
      this.applyBounceAnimation();
    });
  }

  private applyBounceAnimation() {
    this.bounceClass = true;
    // Después de un tiempo, quita la clase de animación
    setTimeout(() => {
      this.bounceClass = false;
    }, 800);
  }
}
