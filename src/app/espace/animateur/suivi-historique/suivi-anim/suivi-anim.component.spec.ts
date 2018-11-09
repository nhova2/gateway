import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviAnimComponent } from './suivi-anim.component';

describe('SuiviAnimComponent', () => {
  let component: SuiviAnimComponent;
  let fixture: ComponentFixture<SuiviAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
