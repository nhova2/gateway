import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviMuserComponent } from './suivi-muser.component';

describe('SuiviMuserComponent', () => {
  let component: SuiviMuserComponent;
  let fixture: ComponentFixture<SuiviMuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviMuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviMuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
