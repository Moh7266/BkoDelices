import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutSuperAdminComponent } from './ajout-super-admin.component';

describe('AjoutSuperAdminComponent', () => {
  let component: AjoutSuperAdminComponent;
  let fixture: ComponentFixture<AjoutSuperAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutSuperAdminComponent]
    });
    fixture = TestBed.createComponent(AjoutSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
