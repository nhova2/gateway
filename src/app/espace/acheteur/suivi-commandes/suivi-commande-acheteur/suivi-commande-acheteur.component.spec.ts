import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviCommandeAcheteurComponent } from './suivi-commande-acheteur.component';

describe('SuiviCommandeAcheteurComponent', () => {
  let component: SuiviCommandeAcheteurComponent;
  let fixture: ComponentFixture<SuiviCommandeAcheteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviCommandeAcheteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviCommandeAcheteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
