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
  item1: any;
  item2: any;
  bounceClass: boolean = false;

  constructor(private api: PokeapiService) {}

  getItemDataID() {
    this.api.getItemID(+this.entrada1).subscribe((response) => {
      this.item1 = response;
      console.log(this.item1);
      this.applyBounceAnimation();
    });
  }

  getItemDataName() {
    this.api.getItemName(this.entrada2.toLowerCase()).subscribe((response) => {
      this.item2 = response;
      console.log(this.item2);
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
