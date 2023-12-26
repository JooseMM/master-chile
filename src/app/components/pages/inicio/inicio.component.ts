import { Component,OnInit, OnDestroy, AfterViewInit, } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { DataService } from "../../../data.service";
import {Subscription, Observable } from "rxjs";
import { Router} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnDestroy, AfterViewInit, OnInit {

  scrollSubs: Subscription | undefined;
  scrollToThis : string | undefined;
  constructor(private scroller: ViewportScroller, private service: DataService, private router: Router) {}

  ngOnInit() {
      this.scrollSubs = this.service
      .getIdToScroll()
      .subscribe({
        next: (value:string) => {
          if(value) {
            this.scroll(value)
          }
        }
      });
  }
  ngAfterViewInit() {
    if(this.scrollToThis) {
      this.scroll(this.scrollToThis);
    }
  }
  scroll(selection: string):void {
    this.scroller.scrollToAnchor(selection);
  }
  ngOnDestroy():void {
    if(this.scrollSubs) {
      this.service.updateIdToScroll("");
      this.scrollSubs.unsubscribe();
      this.scrollToThis = '';
    }
  }

}
