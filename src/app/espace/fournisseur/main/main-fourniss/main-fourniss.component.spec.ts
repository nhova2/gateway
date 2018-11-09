import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFournissComponent } from './main-fourniss.component';

describe('MainFournissComponent', () => {
  let component: MainFournissComponent;
  let fixture: ComponentFixture<MainFournissComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFournissComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFournissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
