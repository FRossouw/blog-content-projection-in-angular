import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSingleSlotComponent } from './question-single-slot.component';

describe('QuestionSingleSlotComponent', () => {
  let component: QuestionSingleSlotComponent;
  let fixture: ComponentFixture<QuestionSingleSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionSingleSlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSingleSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
