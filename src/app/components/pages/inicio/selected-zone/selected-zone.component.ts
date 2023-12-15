import { Component, OnDestroy, OnInit} from '@angular/core';
import {IBranches } from '../../../../branches'
import {DataService} from '../../../../data.service'
import {Subscription, tap} from "rxjs"

@Component({
  selector: 'app-selected-zone',
  templateUrl: './selected-zone.component.html',
  styles: [
  ]
})
export class SelectedZoneComponent {
showBranches: Array<IBranches>;
  dataSubcription: Subscription;
  showDetails: string;
  show = true;

  ngOnInit() {
    this.dataSubcription = this.service.getSelectedBranches()
        .subscribe((data: Array<IBranches>)=> this.showBranches = data);
  }
  constructor(private service: DataService) {
    this.showDetails = 'branch-bg-2 w-96 h-44 rounded-md pl-10 flex cursor-pointer flex-col justify-center items-start border-solid border-2 border-dimmed-white';
    this.showBranches = []
    this.dataSubcription = new Subscription();
  }
  toggleDetail(id: number ) {
    this.service.toggleDetails(id);
  }
  ngOnDestroy():void {
   this.dataSubcription.unsubscribe();
  }
}
