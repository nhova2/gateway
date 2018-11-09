import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMuserComponent } from './main-muser.component';

describe('MainMuserComponent', () => {
  let component: MainMuserComponent;
  let fixture: ComponentFixture<MainMuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
