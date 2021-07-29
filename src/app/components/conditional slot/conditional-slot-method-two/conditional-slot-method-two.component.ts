import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dvt-conditional-slot-method-two',
  templateUrl: './conditional-slot-method-two.component.html',
  styleUrls: ['./conditional-slot-method-two.component.less']
})
export class ConditionalSlotMethodTwoComponent implements OnInit {

  matriculated: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
