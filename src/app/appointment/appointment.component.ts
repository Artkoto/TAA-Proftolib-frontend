import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  @Input() id : number = 0;
  @Input() title : string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
