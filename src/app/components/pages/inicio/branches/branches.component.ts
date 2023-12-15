import { Component } from '@angular/core';
import {DataService} from '../../../../data.service'

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent {
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
