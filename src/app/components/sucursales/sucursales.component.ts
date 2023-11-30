import { Component } from '@angular/core';

@Component({
  selector: 'app-sucursales',
  template: `
  <section class="bg-strong-black text-dimmed-white py-10 flex flex-col justify-center items-center">
    <h3 class="archivo-font font-bold mb-10 text-4xl">Sucursales</h3>
      <select class="py-3.5 px-4 w-80 text-strong-black/70 font-medium rounded-md" [(ngModel)]="zonas" >
        <option value="zona sur">Zona Sur</option>
        <option value="zona norte">Zona Norte</option>
        <option value="zona central">Zona Central</option>
      </select>
  </section>
  `,
  styles: [
  ]
})
export class SucursalesComponent {
zonas = "zona central"
}

