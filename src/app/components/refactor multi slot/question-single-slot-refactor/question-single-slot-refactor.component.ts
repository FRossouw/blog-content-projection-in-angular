import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dvt-question-single-slot-refactor',
  templateUrl: './question-single-slot-refactor.component.html',
  styleUrls: ['./question-single-slot-refactor.component.less']
})
export class QuestionSingleSlotRefactorComponent implements OnInit {

  @Input() question: string;
  @Input() questionNumber?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
