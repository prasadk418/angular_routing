import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarydetailsComponent } from './librarydetails.component';

describe('LibrarydetailsComponent', () => {
  let component: LibrarydetailsComponent;
  let fixture: ComponentFixture<LibrarydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
