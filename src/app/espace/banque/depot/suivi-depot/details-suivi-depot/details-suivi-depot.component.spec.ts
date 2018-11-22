import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSuiviDepotComponent } from './details-suivi-depot.component';

describe('DetailsSuiviDepotComponent', () => {
  let component: DetailsSuiviDepotComponent;
  let fixture: ComponentFixture<DetailsSuiviDepotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSuiviDepotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSuiviDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
