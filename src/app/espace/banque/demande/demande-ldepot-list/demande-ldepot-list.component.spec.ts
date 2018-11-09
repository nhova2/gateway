import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeLdepotListComponent } from './demande-ldepot-list.component';

describe('DemandeLdepotListComponent', () => {
  let component: DemandeLdepotListComponent;
  let fixture: ComponentFixture<DemandeLdepotListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeLdepotListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeLdepotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
