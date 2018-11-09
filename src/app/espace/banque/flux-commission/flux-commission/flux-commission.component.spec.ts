import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxCommissionComponent } from './flux-commission.component';

describe('FluxCommissionComponent', () => {
  let component: FluxCommissionComponent;
  let fixture: ComponentFixture<FluxCommissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxCommissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
