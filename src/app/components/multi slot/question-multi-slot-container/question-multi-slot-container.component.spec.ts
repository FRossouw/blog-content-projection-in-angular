import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMultiSlotContainerComponent } from './question-multi-slot-container.component';

describe('QuestionMultiSlotContainerComponent', () => {
  let component: QuestionMultiSlotContainerComponent;
  let fixture: ComponentFixture<QuestionMultiSlotContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionMultiSlotContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionMultiSlotContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
