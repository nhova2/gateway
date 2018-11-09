import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotationsListComponent } from './notations-list.component';

describe('NotationsListComponent', () => {
  let component: NotationsListComponent;
  let fixture: ComponentFixture<NotationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
