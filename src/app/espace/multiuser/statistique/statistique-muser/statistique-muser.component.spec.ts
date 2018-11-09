import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StatistiqueMuserComponent } from './statistique-muser.component';


describe('StatistiqueMuserComponent', () => {
  let component: StatistiqueMuserComponent;
  let fixture: ComponentFixture<StatistiqueMuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistiqueMuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiqueMuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
