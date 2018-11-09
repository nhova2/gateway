import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionAnimComponent } from './gestion-anim.component';

//import { AlertesAnimComponent } from './alertes-anim.component';

describe('AlertesAnimComponent', () => {
  let component: GestionAnimComponent;
  let fixture: ComponentFixture<GestionAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
