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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    SucursalesComponent,
    NosotrosComponent,
    ContactoComponent,
    FooterComponent,
    ConvertToReadablePipe
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
