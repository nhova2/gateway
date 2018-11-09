import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FoRemboursementListComponent } from './fourn-remboursement-list.component';


describe('FoRemboursementListComponent', () => {
  let component: FoRemboursementListComponent;
  let fixture: ComponentFixture<FoRemboursementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoRemboursementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoRemboursementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
