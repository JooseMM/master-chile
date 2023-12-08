import { Component } from '@angular/core';

@Component({
  selector: 'app-sucursales',
  template: `
  <section class="bg-strong-black text-dimmed-white py-10 flex flex-col justify-center items-center">
    <h3 class="archivo-font font-bold mb-10 text-4xl">sucursales</h3>
      <select class="py-3.5 px-4 w-80 text-strong-black font-medium rounded-md" [(ngModel)]="zonas" >
        <option value="zona sur">zona sur</option>
        <option value="zona norte">zona norte</option>
        <option value="zona central">zona central</option>
      </select>
  <div>
    <button>{{zonas}}</button>
  </div>
  </section>


`,
  //templateUrl: './sucursales.component.html',
  styles: [
  ]
})
export class SucursalesComponent {
zonas = "zona central"
}

//  <section class="bg-strong-black text-dimmed-white py-10 flex flex-col justify-center items-center">
//    <h3 class="archivo-font font-bold mb-10 text-4xl">sucursales</h3>
//      <select class="py-3.5 px-4 w-80 text-strong-black font-medium rounded-md" [(ngmodel)]="zonas" >
//        <option value="zona sur">zona sur</option>
//        <option value="zona norte">zona norte</option>
//        <option value="zona central">zona central</option>
//      </select>
//  <div>
//    <button>santiago</button>
//  </div>
//  </section>
