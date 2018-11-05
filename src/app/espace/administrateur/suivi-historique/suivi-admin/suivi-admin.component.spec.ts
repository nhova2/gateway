import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviAdminComponent } from './suivi-admin.component';

describe('SuiviAdminComponent', () => {
  let component: SuiviAdminComponent;
  let fixture: ComponentFixture<SuiviAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
