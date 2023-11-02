import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutRestauComponent } from './ajout-restau.component';

describe('AjoutRestauComponent', () => {
  let component: AjoutRestauComponent;
  let fixture: ComponentFixture<AjoutRestauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutRestauComponent]
    });
    fixture = TestBed.createComponent(AjoutRestauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
