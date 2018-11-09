import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FoOffreListComponent } from './fourn-offre-list.component';


describe('FoOffreListComponent', () => {
  let component: FoOffreListComponent;
  let fixture: ComponentFixture<FoOffreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoOffreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoOffreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
