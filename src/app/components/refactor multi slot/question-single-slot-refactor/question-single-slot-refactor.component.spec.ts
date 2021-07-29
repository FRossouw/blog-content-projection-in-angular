import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSingleSlotRefactorComponent } from './question-single-slot-refactor.component';

describe('QuestionSingleSlotRefactorComponent', () => {
  let component: QuestionSingleSlotRefactorComponent;
  let fixture: ComponentFixture<QuestionSingleSlotRefactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionSingleSlotRefactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSingleSlotRefactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
