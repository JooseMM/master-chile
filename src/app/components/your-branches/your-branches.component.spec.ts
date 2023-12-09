import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourBranchesComponent } from './your-branches.component';

describe('YourBranchesComponent', () => {
  let component: YourBranchesComponent;
  let fixture: ComponentFixture<YourBranchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourBranchesComponent]
    });
    fixture = TestBed.createComponent(YourBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
