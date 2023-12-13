import { Component } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showMobileMenu: boolean;
  constructor() {
    this.showMobileMenu = false;
  }
  toggleMobileMenu():void {
    this.showMobileMenu = !this.showMobileMenu;
  }

}
