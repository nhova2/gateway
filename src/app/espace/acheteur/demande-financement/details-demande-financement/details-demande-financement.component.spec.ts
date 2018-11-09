import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDemandeFinancementComponent } from './details-demande-financement.component';

describe('DetailsDemandeFinancementComponent', () => {
  let component: DetailsDemandeFinancementComponent;
  let fixture: ComponentFixture<DetailsDemandeFinancementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDemandeFinancementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDemandeFinancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
