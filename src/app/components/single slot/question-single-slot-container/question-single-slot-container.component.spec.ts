import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSingleSlotContainerComponent } from './question-single-slot-container.component';

describe('QuestionSingleSlotContainerComponent', () => {
  let component: QuestionSingleSlotContainerComponent;
  let fixture: ComponentFixture<QuestionSingleSlotContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionSingleSlotContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSingleSlotContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
