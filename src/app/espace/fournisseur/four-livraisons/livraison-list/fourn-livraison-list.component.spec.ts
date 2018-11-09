import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FoLivraisonListComponent } from './fourn-livraison-list.component';


describe('FoLivraisonListComponent', () => {
  let component: FoLivraisonListComponent;
  let fixture: ComponentFixture<FoLivraisonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoLivraisonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoLivraisonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
