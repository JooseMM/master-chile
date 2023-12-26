import { Component } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  constructor(private router: Router) {
  }
  navigateHome():void {
    this.router.navigate(['/inicio']);
  }
}
