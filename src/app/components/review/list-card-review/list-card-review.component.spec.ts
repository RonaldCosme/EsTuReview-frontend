import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardReviewComponent } from './list-card-review.component';

describe('ListCardReviewComponent', () => {
  let component: ListCardReviewComponent;
  let fixture: ComponentFixture<ListCardReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCardReviewComponent]
    });
    fixture = TestBed.createComponent(ListCardReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
