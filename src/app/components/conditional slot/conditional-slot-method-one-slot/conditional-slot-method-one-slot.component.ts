import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dvt-conditional-slot-method-one-slot',
  templateUrl: './conditional-slot-method-one-slot.component.html',
  styleUrls: ['./conditional-slot-method-one-slot.component.less']
})
export class ConditionalSlotMethodOneSlotComponent implements OnInit {

  @Input() question: string;
  @Input() questionNumber?: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
