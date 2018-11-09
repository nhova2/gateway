import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviDevisComponent } from './suivi-devis.component';

describe('SuiviDevisComponent', () => {
  let component: SuiviDevisComponent;
  let fixture: ComponentFixture<SuiviDevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviDevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
