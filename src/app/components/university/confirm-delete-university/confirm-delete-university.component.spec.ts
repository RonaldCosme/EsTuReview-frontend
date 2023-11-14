import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteUniversityComponent } from './confirm-delete-university.component';

describe('ConfirmDeleteUniversityComponent', () => {
  let component: ConfirmDeleteUniversityComponent;
  let fixture: ComponentFixture<ConfirmDeleteUniversityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDeleteUniversityComponent]
    });
    fixture = TestBed.createComponent(ConfirmDeleteUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
