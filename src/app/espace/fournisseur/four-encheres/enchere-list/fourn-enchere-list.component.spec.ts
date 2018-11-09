import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FoEnchereListComponent } from './fourn-enchere-list.component';


describe('FoEnchereListComponent', () => {
  let component: FoEnchereListComponent;
  let fixture: ComponentFixture<FoEnchereListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoEnchereListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoEnchereListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
