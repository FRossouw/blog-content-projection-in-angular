import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dvt-question-multi-slot',
  templateUrl: './question-multi-slot.component.html',
  styleUrls: ['./question-multi-slot.component.less']
})
export class QuestionMultiSlotComponent implements OnInit {

  @Input() question: string;
  @Input() questionNumber: number;
  @Input() subQuestion: string;

  constructor() { }

  ngOnInit(): void {
  }

}
