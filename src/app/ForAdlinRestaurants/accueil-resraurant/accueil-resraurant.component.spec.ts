import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilResraurantComponent } from './accueil-resraurant.component';

describe('AccueilResraurantComponent', () => {
  let component: AccueilResraurantComponent;
  let fixture: ComponentFixture<AccueilResraurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilResraurantComponent]
    });
    fixture = TestBed.createComponent(AccueilResraurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
