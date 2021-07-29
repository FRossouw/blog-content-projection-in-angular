import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSingleSlotRefactorContainerComponent } from './question-single-slot-refactor-container.component';

describe('QuestionSingleSlotRefactorContainerComponent', () => {
  let component: QuestionSingleSlotRefactorContainerComponent;
  let fixture: ComponentFixture<QuestionSingleSlotRefactorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionSingleSlotRefactorContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSingleSlotRefactorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
