import { Component } from '@angular/core';

@Component({
  selector: 'app-divider',
  template: `
<section class="bg-strong-black py-7 flex justify-center items-center space-x-24">
  <img src="../../../../assets/fechipo.svg" alt="fechipo logo" class="w-60" />
  <img src="../../../../assets/fechipo.svg" alt="fechipo logo" class="w-60 hidden lg:block" />
  <img src="../../../../assets/fechipo.svg" alt="fechipo logo" class="w-60 hidden lg:block" />
</section>
`,
})
export class DividerComponent {

}
