import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional-slot-method-two-slot',
  templateUrl: './conditional-slot-method-two-slot.component.html',
  styleUrls: ['./conditional-slot-method-two-slot.component.less']
})
export class ConditionalSlotMethodTwoSlotComponent implements OnInit {

  @Input() question: string;
  @Input() questionNumber?: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
