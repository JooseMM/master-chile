import { Component,OnInit, OnDestroy } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { DataService } from "../../../data.service";
import {Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnDestroy {

  scrollToThis: Subscription;
  constructor(private scroller: ViewportScroller, private service: DataService, private router: Router) {
   this.scrollToThis = this.service.getIdToScroll().subscribe({
      next: (v) => this.scroll(v),
    });
  }
  scroll(selection: string):void {
//    console.log('click!');
//    this.router.navigate(['/inicio']);
    this.scroller.scrollToAnchor(selection);
  }
  ngOnDestroy():void {
    this.scrollToThis.unsubscribe();
  }

}
