import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAnimComponent } from './main-anim.component';

describe('MainAnimComponent', () => {
  let component: MainAnimComponent;
  let fixture: ComponentFixture<MainAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
