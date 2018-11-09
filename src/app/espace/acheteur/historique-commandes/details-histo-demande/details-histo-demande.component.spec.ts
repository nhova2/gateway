import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsHistoDemandeComponent } from './details-histo-demande.component';

describe('DetailsHistoDemandeComponent', () => {
  let component: DetailsHistoDemandeComponent;
  let fixture: ComponentFixture<DetailsHistoDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsHistoDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsHistoDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
