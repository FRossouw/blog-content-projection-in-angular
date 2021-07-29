import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMultiSlotComponent } from './question-multi-slot.component';

describe('QuestionMultiSlotComponent', () => {
  let component: QuestionMultiSlotComponent;
  let fixture: ComponentFixture<QuestionMultiSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionMultiSlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionMultiSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
