import { Component, OnInit } from '@angular/core';
import {AppointmentService} from "../../services/appointment.service";

@Component({
  selector: 'app-single-appointment',
  templateUrl: './single-appointment.component.html',
  styleUrls: ['./single-appointment.component.scss']
})
export class SingleAppointmentComponent implements OnInit {

  appointment : any;
  constructor(private appointmentService : AppointmentService) { }

  ngOnInit(): void {
    this.appointment = this.appointmentService.getAppointmentById(1)
  }

}
