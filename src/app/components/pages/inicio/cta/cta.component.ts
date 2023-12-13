import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  template: `
<section class="relative py-14 bg-light-black text-dimmed-white flex justify-center flex-col items-center cta-bg">
  <h2 class="mb-6 text-5xl font-bold dm-sans-font">Conviertete en un<br /> <i>Master</i>, es gratis!</h2>
  <button class="bg-bright-red archivo-font font-black  py-2.5 px-11 rounded-md text-lg btn-shadow tracking-wider"
    alt="suscribirse">INSCRIBETE</button>
</section>
 `
})
export class CtaComponent {

}
