import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerationActionComponent } from './moderation-action.component';

describe('ModerationActionComponent', () => {
  let component: ModerationActionComponent;
  let fixture: ComponentFixture<ModerationActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModerationActionComponent]
    });
    fixture = TestBed.createComponent(ModerationActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
