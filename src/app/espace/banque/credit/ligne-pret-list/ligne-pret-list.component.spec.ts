import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LignePretListComponent } from './ligne-pret-list.component';

describe('LignePretListComponent', () => {
  let component: LignePretListComponent;
  let fixture: ComponentFixture<LignePretListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LignePretListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LignePretListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
