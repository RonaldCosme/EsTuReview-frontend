import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertProfessorComponent } from './insert-professor.component';

describe('InsertProfessorComponent', () => {
  let component: InsertProfessorComponent;
  let fixture: ComponentFixture<InsertProfessorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertProfessorComponent]
    });
    fixture = TestBed.createComponent(InsertProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
