import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FoCommandeListComponent } from './fourn-commande-list.component';


describe('FoCommandeListComponent', () => {
  let component: FoCommandeListComponent;
  let fixture: ComponentFixture<FoCommandeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoCommandeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoCommandeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
