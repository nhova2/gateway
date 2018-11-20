import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandFinanFormulaireComponent } from './demand-finan-formulaire.component';

describe('DemandFinanFormulaireComponent', () => {
  let component: DemandFinanFormulaireComponent;
  let fixture: ComponentFixture<DemandFinanFormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandFinanFormulaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandFinanFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
