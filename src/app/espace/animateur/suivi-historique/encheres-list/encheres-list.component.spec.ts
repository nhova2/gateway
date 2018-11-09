import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncheresListComponent } from './encheres-list.component';

describe('EncheresListComponent', () => {
  let component: EncheresListComponent;
  let fixture: ComponentFixture<EncheresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncheresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncheresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
