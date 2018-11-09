import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviDepotComponent } from './suivi-depot.component';

describe('SuiviDepotComponent', () => {
  let component: SuiviDepotComponent;
  let fixture: ComponentFixture<SuiviDepotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviDepotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
