import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandDevisFormulaireComponent } from './demand-devis-formulaire.component';

describe('DemandDevisFormulaireComponent', () => {
  let component: DemandDevisFormulaireComponent;
  let fixture: ComponentFixture<DemandDevisFormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandDevisFormulaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandDevisFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
