import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcheteurComponent } from './acheteur.component';

describe('AcheteurComponent', () => {
  let component: AcheteurComponent;
  let fixture: ComponentFixture<AcheteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcheteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcheteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
