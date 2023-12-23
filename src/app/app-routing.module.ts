import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import {InicioComponent} from './components/pages/inicio/inicio.component'
import {ContactoComponent} from './components/pages/contacto/contacto.component'


const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
    {
    path: '',
    redirectTo: '/inicio', pathMatch: 'full'
  },


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
