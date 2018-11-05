import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivraisonAcheteurComponent } from './livraison-acheteur.component';

describe('LivraisonAcheteurComponent', () => {
  let component: LivraisonAcheteurComponent;
  let fixture: ComponentFixture<LivraisonAcheteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivraisonAcheteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivraisonAcheteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
