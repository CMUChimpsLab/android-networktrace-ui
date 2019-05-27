import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterModalComponent } from './search-filter-modal.component';

describe('SearchFilterModalComponent', () => {
  let component: SearchFilterModalComponent;
  let fixture: ComponentFixture<SearchFilterModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilterModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
