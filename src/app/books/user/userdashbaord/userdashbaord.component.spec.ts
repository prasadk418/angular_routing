import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashbaordComponent } from './userdashbaord.component';

describe('UserdashbaordComponent', () => {
  let component: UserdashbaordComponent;
  let fixture: ComponentFixture<UserdashbaordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdashbaordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
