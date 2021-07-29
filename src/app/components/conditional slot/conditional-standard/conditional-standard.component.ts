import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dvt-conditional-standard',
  templateUrl: './conditional-standard.component.html',
  styleUrls: ['./conditional-standard.component.less']
})
export class ConditionalStandardComponent implements OnInit {

  matriculated: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
