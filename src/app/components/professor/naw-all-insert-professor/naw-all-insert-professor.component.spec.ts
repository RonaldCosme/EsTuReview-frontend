import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NawAllInsertProfessorComponent } from './naw-all-insert-professor.component';

describe('NawAllInsertProfessorComponent', () => {
  let component: NawAllInsertProfessorComponent;
  let fixture: ComponentFixture<NawAllInsertProfessorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NawAllInsertProfessorComponent]
    });
    fixture = TestBed.createComponent(NawAllInsertProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
