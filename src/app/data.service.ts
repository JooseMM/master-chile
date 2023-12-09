import { Injectable, OnInit} from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {

    branchesData: any;
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    this.http.get('../../../assets/branches/braches.json').subscribe((res:any)=>{
      this.branchesData = res.branches;
    })
  }
  private BranchesIn = new Subject<any>();
  showbranchesIn = this.BranchesIn.asObservable();

  updateBranchesIn(newData: string) {
    this.BranchesIn.next(newData);
  }
}
