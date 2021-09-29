import { Component, OnInit } from '@angular/core';
import {AppointmentService} from "../../services/appointment.service";
import {ClientAuthComponent} from "../client-auth/client-auth.component";

@Component({
  selector: 'app-client-appointments',
  templateUrl: './client-appointments.component.html',
  styleUrls: ['./client-appointments.component.scss']
})
export class ClientAppointmentsComponent implements OnInit {
appointment : any = [];
  constructor(private appointmentService : AppointmentService) { }

  ngOnInit(): void {
    this.appointment = this.appointmentService.getAppointmentByUser(ClientAuthComponent.user.id)
  }

}
