import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSingleStandardComponent } from './question-single-standard.component';

describe('QuestionSingleStandardComponent', () => {
  let component: QuestionSingleStandardComponent;
  let fixture: ComponentFixture<QuestionSingleStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionSingleStandardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSingleStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
