import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GDemandeListComponent } from './g-demande-list.component';

describe('GDemandeListComponent', () => {
  let component: GDemandeListComponent;
  let fixture: ComponentFixture<GDemandeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GDemandeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GDemandeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
