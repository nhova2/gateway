import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FoBoutiqueListComponent } from './fourn-boutique-list.component';


describe('FoBoutiqueListComponent', () => {
  let component: FoBoutiqueListComponent;
  let fixture: ComponentFixture<FoBoutiqueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoBoutiqueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoBoutiqueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
