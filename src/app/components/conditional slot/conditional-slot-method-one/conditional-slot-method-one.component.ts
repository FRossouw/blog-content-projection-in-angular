import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dvt-conditional-slot-method-one',
  templateUrl: './conditional-slot-method-one.component.html',
  styleUrls: ['./conditional-slot-method-one.component.less']
})
export class ConditionalSlotMethodOneComponent implements OnInit {

  matriculated: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
