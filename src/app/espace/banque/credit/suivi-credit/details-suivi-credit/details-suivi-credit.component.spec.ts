import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSuiviCreditComponent } from './details-suivi-credit.component';

describe('DetailsSuiviCreditComponent', () => {
  let component: DetailsSuiviCreditComponent;
  let fixture: ComponentFixture<DetailsSuiviCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSuiviCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSuiviCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
