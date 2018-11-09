import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSuiviComponent } from './search-suivi.component';

describe('SearchSuiviComponent', () => {
  let component: SearchSuiviComponent;
  let fixture: ComponentFixture<SearchSuiviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSuiviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSuiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
