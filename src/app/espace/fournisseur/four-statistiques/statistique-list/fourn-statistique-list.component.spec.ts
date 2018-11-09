import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FoStatistiqueListComponent } from './fourn-statistique-list.component';


describe('FoStatistiqueListComponent', () => {
  let component: FoStatistiqueListComponent;
  let fixture: ComponentFixture<FoStatistiqueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoStatistiqueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoStatistiqueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
