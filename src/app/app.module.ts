import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { NosotrosComponent } from './components/pages/nosotros/nosotros.component';
import { ContactoComponent } from './components/pages/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from "@angular/forms"
import {HttpClientModule} from "@angular/common/http";
import { ConvertToReadablePipe } from './convert-to-readable.pipe';
import { YourBranchesComponent } from './components/your-branches/your-branches.component';
import { HeroComponent } from './components/pages/inicio/hero/hero.component';
import { AboutComponent } from './components/pages/inicio/about/about.component';
import { BranchesComponent } from './components/pages/inicio/branches/branches.component';
import { CtaComponent } from './components/pages/inicio/cta/cta.component';
import { DividerComponent } from './components/pages/inicio/divider/divider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    SucursalesComponent,
    NosotrosComponent,
    ContactoComponent,
    FooterComponent,
    ConvertToReadablePipe,
    YourBranchesComponent,
    HeroComponent,
    AboutComponent,
    BranchesComponent,
    CtaComponent,
    DividerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
