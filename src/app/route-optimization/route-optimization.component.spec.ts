import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteOptimizationComponent } from './route-optimization.component';

describe('RouteOptimizationComponent', () => {
  let component: RouteOptimizationComponent;
  let fixture: ComponentFixture<RouteOptimizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteOptimizationComponent]
    });
    fixture = TestBed.createComponent(RouteOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
