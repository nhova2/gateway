import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertesMuserComponent } from './alertes-muser.component';

describe('AlertesMuserComponent', () => {
  let component: AlertesMuserComponent;
  let fixture: ComponentFixture<AlertesMuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertesMuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertesMuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
