import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeResaturantsComponent } from './liste-resaturants.component';

describe('ListeResaturantsComponent', () => {
  let component: ListeResaturantsComponent;
  let fixture: ComponentFixture<ListeResaturantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeResaturantsComponent]
    });
    fixture = TestBed.createComponent(ListeResaturantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
