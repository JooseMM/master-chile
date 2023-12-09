import { Component, OnDestroy} from '@angular/core';
import {DataService} from '../../data.service'
import {Subscription} from "rxjs"


@Component({
  selector: 'app-your-branches',
  templateUrl:'./your-branches.component.html',
  styles: [
  ]
})
export class YourBranchesComponent implements OnDestroy {
  showBranches: any;
  dataSubcription: Subscription;

constructor(private service: DataService) {
  this.dataSubcription = service.getSelectedBranches()
      .subscribe((data)=> this.showBranches = data)
  }
  ngOnDestroy():void {
   this.dataSubcription.unsubscribe();
  }
}
