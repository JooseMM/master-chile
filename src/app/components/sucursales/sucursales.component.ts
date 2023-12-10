import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import {DataService} from "../../data.service"
import {Subscription, tap} from "rxjs"

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styles: [
  ]
})
export class SucursalesComponent implements OnInit, OnDestroy{
  branches: any;
  dataSubcription: any;
  selected: string = ''

  ngOnInit(): void{
        this.dataSubcription = this.service.getData()
        .subscribe((res)=> this.branches = res);
  }
  constructor(private service: DataService) {
    this.dataSubcription = undefined;
  }

  onValueChange(newSelection: any) {
    this.service.updateSelection(newSelection);
  }

  ngOnDestroy():void {
   this.dataSubcription.unsubscribe();
  }


}


