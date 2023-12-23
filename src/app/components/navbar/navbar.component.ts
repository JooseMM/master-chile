import { Component } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import { DataService } from "../../data.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showMobileMenu: boolean;
  constructor(private router: Router, private service: DataService) {
    this.showMobileMenu = false;
  }
  toggleMobileMenu():void {
    this.showMobileMenu = !this.showMobileMenu;
  }
  scrollTo(value: string){
    this.service.updateIdToScroll(value);
  }

}
