import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneCreditListComponent } from './ligne-credit-list.component';

describe('LigneCreditListComponent', () => {
  let component: LigneCreditListComponent;
  let fixture: ComponentFixture<LigneCreditListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigneCreditListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneCreditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
