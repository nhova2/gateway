import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FoMagasinListComponent } from './fourn-magasin-list.component';


describe('FoMagasinListComponent', () => {
  let component: FoMagasinListComponent;
  let fixture: ComponentFixture<FoMagasinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoMagasinListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoMagasinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
