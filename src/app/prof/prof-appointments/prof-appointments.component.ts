import { Component, OnInit } from '@angular/core';
import {AppointmentService} from "../../services/appointment.service";
import {ProfAuthComponent} from "../prof-auth/prof-auth.component";

@Component({
  selector: 'app-prof-appointments',
  templateUrl: './prof-appointments.component.html',
  styleUrls: ['./prof-appointments.component.scss']
})
export class ProfAppointmentsComponent implements OnInit {
  appointment : any = [];
  constructor(private appointmentService : AppointmentService) { }
  ngOnInit(): void {
    this.appointment = this.appointmentService.getAppointmentByUser(ProfAuthComponent.user.id)
  }

}
