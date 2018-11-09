import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandePretListComponent } from './demande-pret-list.component';

describe('DemandePretListComponent', () => {
  let component: DemandePretListComponent;
  let fixture: ComponentFixture<DemandePretListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandePretListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandePretListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
