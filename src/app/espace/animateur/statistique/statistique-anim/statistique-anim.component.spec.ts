import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StatistiqueAnimComponent } from './statistique-anim.component';


describe('StatistiqueAnimComponent', () => {
  let component: StatistiqueAnimComponent;
  let fixture: ComponentFixture<StatistiqueAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistiqueAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiqueAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
