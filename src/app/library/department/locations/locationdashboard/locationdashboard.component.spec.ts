import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationdashboardComponent } from './locationdashboard.component';

describe('LocationdashboardComponent', () => {
  let component: LocationdashboardComponent;
  let fixture: ComponentFixture<LocationdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
