import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertesAdminComponent } from './alertes-admin.component';

describe('AlertesAdminComponent', () => {
  let component: AlertesAdminComponent;
  let fixture: ComponentFixture<AlertesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
