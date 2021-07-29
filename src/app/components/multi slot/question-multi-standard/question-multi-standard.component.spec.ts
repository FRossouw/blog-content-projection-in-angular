import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMultiStandardComponent } from './question-multi-standard.component';

describe('QuestionMultiStandardComponent', () => {
  let component: QuestionMultiStandardComponent;
  let fixture: ComponentFixture<QuestionMultiStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionMultiStandardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionMultiStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
