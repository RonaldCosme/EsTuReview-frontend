import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewComentComponent } from './reviewcoment.component';

describe('ReviewcomentComponent', () => {
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
