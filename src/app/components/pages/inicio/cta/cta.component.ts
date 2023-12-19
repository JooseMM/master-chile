import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  template: `
<section class="relative bg-light-black text-dimmed-white flex justify-center flex-col items-center cta-bg | lg:py-14 ">
  <h2 class="mb-6 mt-44 text-4xl font-bold dm-sans-font | min-[450px]:text-5xl | sm:mt-28 | lg:mt-0 ">Conviertete en un<br /> <i>Master</i>, es gratis!</h2>
  <button class="mb-[70vw] bg-bright-red archivo-font font-black  py-2.5 px-11 rounded-md text-base btn-shadow tracking-wider | sm:mb-36 sm:text-lg | lg:mb-0 "
    alt="suscribirse">INSCRIBETE</button>
</section>
 `
})
export class CtaComponent {

}
