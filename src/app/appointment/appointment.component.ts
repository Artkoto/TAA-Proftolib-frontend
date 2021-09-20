import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  @Input() id : number = 0;
  @Input() title : string = '';
  @Input() prof : any ;
  @Input() client : any ;
  @Input() slot : any  ;


  constructor() { }

  ngOnInit(): void {
  }

}
