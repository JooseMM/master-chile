import { Component, OnInit, OnChanges } from '@angular/core';
import {DataService} from "../../data.service"

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styles: [
  ]
})
export class SucursalesComponent implements OnInit{
  ngOnInit(): void{

  }
  constructor(private dataService: DataService) {

  }
branchesData: any = undefined;
selected: string = ''
  onValueChange(updateSelection: string) {
    if(updateSelection) {
      this.selected = updateSelection;
      console.log(this.selected);
    }
  }
}

