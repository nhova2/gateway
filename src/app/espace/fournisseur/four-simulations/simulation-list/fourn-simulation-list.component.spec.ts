import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FoSimulationListComponent } from './fourn-simulation-list.component';


describe('FoSimulationListComponent', () => {
  let component: FoSimulationListComponent;
  let fixture: ComponentFixture<FoSimulationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoSimulationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoSimulationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
