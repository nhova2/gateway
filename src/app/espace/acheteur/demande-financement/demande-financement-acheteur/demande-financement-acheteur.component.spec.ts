import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeFinancementAcheteurComponent } from './demande-financement-acheteur.component';

describe('DemandeFinancementAcheteurComponent', () => {
  let component: DemandeFinancementAcheteurComponent;
  let fixture: ComponentFixture<DemandeFinancementAcheteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeFinancementAcheteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeFinancementAcheteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
