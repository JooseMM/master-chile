import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap  } from 'rxjs';
import { Branches } from "./branches"

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnDestroy {
  private branchesData:any;
  private selectedBr = new BehaviorSubject([]);

    constructor(private http: HttpClient ){
      }

  getData() :Observable<any> {
    return this.branchesData = this.http.
    get<Object>('../assets/branches/braches.json');
  }
    updateSelection(newSelection: string) {
    this.getData()
      .pipe(map(data => data.branches[newSelection]))
      .subscribe((value)=> this.selectedBr.next(value))
  }
    getSelectedBranches() {
    return this.selectedBr
               .asObservable();
  }
  ngOnDestroy() {
    this.branchesData.unsubscribe();
  }
}


