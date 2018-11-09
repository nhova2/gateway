import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeLcreditListComponent } from './demande-lcredit-list.component';

describe('DemandeLcreditListComponent', () => {
  let component: DemandeLcreditListComponent;
  let fixture: ComponentFixture<DemandeLcreditListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeLcreditListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeLcreditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
