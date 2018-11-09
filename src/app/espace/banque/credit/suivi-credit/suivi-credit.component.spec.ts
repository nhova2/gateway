import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviCreditComponent } from './suivi-credit.component';

describe('SuiviCreditComponent', () => {
  let component: SuiviCreditComponent;
  let fixture: ComponentFixture<SuiviCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
