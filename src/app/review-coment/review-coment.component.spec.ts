import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewComentComponent } from './review-coment.component';

describe('ReviewComentComponent', () => {
  let component: ReviewComentComponent;
  let fixture: ComponentFixture<ReviewComentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewComentComponent]
    });
    fixture = TestBed.createComponent(ReviewComentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
