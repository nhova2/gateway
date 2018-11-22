import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSuiviDevisComponent } from './details-suivi-devis.component';

describe('DetailsSuiviDevisComponent', () => {
  let component: DetailsSuiviDevisComponent;
  let fixture: ComponentFixture<DetailsSuiviDevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSuiviDevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSuiviDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
