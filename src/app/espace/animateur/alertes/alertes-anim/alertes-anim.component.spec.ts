import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertesAnimComponent } from './alertes-anim.component';

describe('AlertesAnimComponent', () => {
  let component: AlertesAnimComponent;
  let fixture: ComponentFixture<AlertesAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertesAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertesAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
