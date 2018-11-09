import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FoCatalogueListComponent } from './fourn-catalogue-list.component';


describe('FoCatalogueListComponent', () => {
  let component: FoCatalogueListComponent;
  let fixture: ComponentFixture<FoCatalogueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoCatalogueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoCatalogueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
