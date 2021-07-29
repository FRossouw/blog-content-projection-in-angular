import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dvt-question-single-slot',
  templateUrl: './question-single-slot.component.html',
  styleUrls: ['./question-single-slot.component.less']
})
export class QuestionSingleSlotComponent implements OnInit {

  @Input() question: string;
  @Input() questionNumber?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
