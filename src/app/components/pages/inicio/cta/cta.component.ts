import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  template: `
<section class="relative bg-light-black text-dimmed-white flex justify-center flex-col items-center cta-bg | lg:py-14 ">
  <h2 class="mb-6 mt-44 text-4xl font-bold dm-sans-font | lg:text-5xl lg:mt-0">Conviertete en un<br /> <i>Master</i>, es gratis!</h2>
  <button class="mb-80 bg-bright-red archivo-font font-black  py-2.5 px-11 rounded-md text-base btn-shadow tracking-wider | lg:mb-0 lg:text-lg"
    alt="suscribirse">INSCRIBETE</button>
</section>
 `
})
export class CtaComponent {

}
