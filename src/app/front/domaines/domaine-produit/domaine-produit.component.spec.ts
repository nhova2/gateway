import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaineProduitComponent } from './domaine-produit.component';

describe('DomaineProduitComponent', () => {
  let component: DomaineProduitComponent;
  let fixture: ComponentFixture<DomaineProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomaineProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomaineProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
