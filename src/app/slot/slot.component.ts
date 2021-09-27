import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent implements OnInit {

  @Input() id : number = 0;
  @Input() begin : Date = new Date() ;
  @Input() end : Date = new Date() ;

  constructor() { }

  ngOnInit(): void {
  }

}
