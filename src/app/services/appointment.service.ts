import { HttpClient } from '@angular/common/http';
import{Injectable} from '@angular/core';
import {AppointmentComponent} from "../appointment/appointment.component";

const apiUrl ='http://localhost:9000/rdv/';
export interface User {
  id:       number;
  email:    string;
  name:     string;
  lastname: string;
}
export interface Slot {
  id:    number;
  debut: Date;
  fin:   Date;
}
export interface Appointment {
  id:    number;
  title: string;
}


@Injectable({providedIn: 'root'})
export class AppointmentService {

  constructor(private http:HttpClient){
  }


  getAppointmentById(id : number) : AppointmentComponent {
    let appointment : AppointmentComponent = new AppointmentComponent();
    this.http.get<Appointment>(apiUrl+'id='+id).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          appointment.id = data.id;
          appointment.title = data.title;
        }
      },
    );
    return appointment;
  }

  getAppointmentByTitle(title : String) : AppointmentComponent {
    let appointment : AppointmentComponent = new AppointmentComponent();
    this.http.get<Appointment>(apiUrl+'title='+title).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          appointment.id = data.id;
          appointment.title = data.title;
        }
      },
    );
    return appointment;
  }

  getAppointmentByUser(id : number) : any[] {
    let appointments : any[] = [];
    this.http.get<Appointment[]>(apiUrl+'user/id='+id).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          data.forEach(((e)  => {
            appointments.push({
              id : e.id,
              title : e.title,
            })
          }));
        }
      },
    );
    return appointments;
  }
  getAppointmentBySlot(id : number) : any[] {
    let appointments  :any[]=[];
    this.http.get<Appointment[]>(apiUrl+'creneau/id='+id).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          data.forEach(((e)  => {
            appointments.push({
              id : e.id,
              title : e.title,
            })
          }));
        }
      },
    );
    return appointments;
  }

  addAppointment(appointment : AppointmentComponent) : AppointmentComponent {
    let appointmentAdded: AppointmentComponent = new AppointmentComponent();
    this.http.post<Appointment>(apiUrl+'add',appointment).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          appointmentAdded.id = data.id;
          appointmentAdded.title = data.title;
        }
      },
    );
    return appointmentAdded;
  }

  updateAppointment(id : number , appointment : AppointmentComponent) : AppointmentComponent {
    let appointmentUpdated : AppointmentComponent = new AppointmentComponent();
    this.http.put<Appointment>(apiUrl+id+'/update',appointment).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          appointmentUpdated.id = data.id;
          appointmentUpdated.title = data.title;
        }
      },
    );
    return appointmentUpdated;
  }

  deleteAppointment(id : number)  {
    this.http.delete<Appointment>(apiUrl+id+'/delete')
  }

}
