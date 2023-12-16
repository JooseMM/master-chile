import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';
import { IBranches, IZones} from "./branches"

@Injectable({
  providedIn: 'root'
})

export class DataService implements OnDestroy {

  private branchesData: BehaviorSubject<IZones>;
  private selectedBranch: BehaviorSubject<IBranches[]>;
  private subscription : Subscription;

  constructor(private http: HttpClient ){
    this.branchesData = new BehaviorSubject<IZones>({
      zonaCentral: [],
      zonaNorte: [],
      zonaSur: []
    });
    this.selectedBranch = new BehaviorSubject<IBranches[]>([]);
    this.subscription = this.http.get<{ branches: IZones}>('../assets/branches/braches.json')
      .subscribe((val: { branches: IZones} )=> this.branchesData.next(val.branches))
  }


  getData():Observable<IZones> {
    return this.branchesData.asObservable();
  }
  updateSelection(newSelection: keyof IZones) {
    const currentValue = this.branchesData.value;
    this.selectedBranch.next(currentValue[newSelection])
  }
 toggleDetails(index :number) {
   let currentValue:IBranches[] = this.selectedBranch.value;
   currentValue[index].showDetails = !currentValue[index].showDetails;
   this.selectedBranch.next(currentValue)
  }
  getSelectedBranches() {
    return this.selectedBranch
      .asObservable();
  }
  ngOnDestroy() {
    this.branchesData.unsubscribe();
  }
}

//id : keyof typeof this.selectedBranch.value
