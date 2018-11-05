import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueCmdAcheteurComponent } from './historique-cmd-acheteur.component';

describe('HistoriqueCmdAcheteurComponent', () => {
  let component: HistoriqueCmdAcheteurComponent;
  let fixture: ComponentFixture<HistoriqueCmdAcheteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueCmdAcheteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueCmdAcheteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
