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
  dataSubcription: Subscription;
  selected: string = ''

  ngOnInit(): void{}
  constructor(private service: DataService) {
    this.dataSubcription = service.getData()
        .subscribe((res)=> this.branches = res.branches);
  }

  onValueChange(newSelection: any) {
    this.service.updateSelection(newSelection);
  }

  ngOnDestroy():void {
   this.dataSubcription.unsubscribe();
  }


}


