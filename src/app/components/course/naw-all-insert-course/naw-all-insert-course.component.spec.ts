import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NawAllInsertCourseComponent } from './naw-all-insert-course.component';

describe('NawAllInsertCourseComponent', () => {
  let component: NawAllInsertCourseComponent;
  let fixture: ComponentFixture<NawAllInsertCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NawAllInsertCourseComponent]
    });
    fixture = TestBed.createComponent(NawAllInsertCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
