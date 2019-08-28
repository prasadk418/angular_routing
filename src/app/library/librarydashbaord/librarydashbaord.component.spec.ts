import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarydashbaordComponent } from './librarydashbaord.component';

describe('LibrarydashbaordComponent', () => {
  let component: LibrarydashbaordComponent;
  let fixture: ComponentFixture<LibrarydashbaordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarydashbaordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarydashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
