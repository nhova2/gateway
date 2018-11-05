import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDevisAcheteurComponent } from './demande-devis-acheteur.component';

describe('DemandeDevisAcheteurComponent', () => {
  let component: DemandeDevisAcheteurComponent;
  let fixture: ComponentFixture<DemandeDevisAcheteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeDevisAcheteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeDevisAcheteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
