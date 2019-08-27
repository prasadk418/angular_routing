import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookauhtorComponent } from './bookauhtor.component';

describe('BookauhtorComponent', () => {
  let component: BookauhtorComponent;
  let fixture: ComponentFixture<BookauhtorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookauhtorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookauhtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
