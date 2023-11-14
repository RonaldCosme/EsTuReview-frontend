import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditReviewComentComponent } from './add-edit-review-coment.component';



describe('AddEditReviewComentComponent', () => {
  let component: AddEditReviewComentComponent;
  let fixture: ComponentFixture<AddEditReviewComentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditReviewComentComponent]
    });
    fixture = TestBed.createComponent(AddEditReviewComentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
