import { Component, OnDestroy, OnInit} from '@angular/core';
import {IBranches } from '../../branches'
import {DataService} from '../../data.service'
import {Subscription, tap} from "rxjs"


@Component({
  selector: 'app-your-branches',
  templateUrl:'./your-branches.component.html',
  styles: [
  ]
})

export class YourBranchesComponent implements OnDestroy, OnInit {
  showBranches: Array<IBranches>;
  dataSubcription: Subscription;


  ngOnInit() {
    this.dataSubcription = this.service.getSelectedBranches()
        .subscribe((data: Array<IBranches>)=> this.showBranches = data);
  }
  constructor(private service: DataService) {
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

