import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingAcheteurComponent } from './shopping-acheteur.component';

describe('ShoppingAcheteurComponent', () => {
  let component: ShoppingAcheteurComponent;
  let fixture: ComponentFixture<ShoppingAcheteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingAcheteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingAcheteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
