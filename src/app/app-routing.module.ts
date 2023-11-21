import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './components/pages/inicio/inicio.component'
import {NosotrosComponent} from './components/pages/nosotros/nosotros.component'
import {SucursalesComponent} from './components/pages/sucursales/sucursales.component'
import {ContactoComponent} from './components/pages/contacto/contacto.component'


const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'sucursales',
    component: SucursalesComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
