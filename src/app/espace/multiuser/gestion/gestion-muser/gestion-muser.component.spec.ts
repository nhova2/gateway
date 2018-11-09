import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionMuserComponent } from './gestion-muser.component';

//import { AlertesMuserComponent } from './alertes-muser.component';

describe('AlertesMuserComponent', () => {
  let component: GestionMuserComponent;
  let fixture: ComponentFixture<GestionMuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionMuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionMuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
