import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteReviewComentComponent } from './confirm-delete-review-coment.component';

describe('ConfirmDeleteReviewComentComponent', () => {
  let component: ConfirmDeleteReviewComentComponent;
  let fixture: ComponentFixture<ConfirmDeleteReviewComentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDeleteReviewComentComponent]
    });
    fixture = TestBed.createComponent(ConfirmDeleteReviewComentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
