import { HttpClient } from '@angular/common/http';
import{Injectable} from '@angular/core';
import {AppointmentComponent} from "../appointment/appointment.component";

//interface data pour la lecture des donnees
//TODO à modifier pour adapter à appointment

export interface User {
  id:                number;
  nom:               string;
  prenom:            string;
  poste:             string;
  photo:             string;
  cv:                string;
  apropos:           string;
  numero:            string;
  email:             string;
  loisirs:           string;
  pays:              null;
  ville:             null;
  derniereMiseAJour: Date;
  domaine_activite:  null;
  offres_recherchee: null;
  status:            null;
  formations:        Experience[];
  experiences:       Experience[];
  competences:       Competence[];
  projets:           Projet[];
}

export interface Competence {
  id:            number;
  name:          string;
  evolution:     number;
  categorie:     string;
  sousCategorie: null;
}

export interface Experience {
  id:         number;
  date_debut: Date;
  date_fin:   Date;
  name:       string;
  lieux:      string;
  pays:       null;
  ville:      null;
  detail:     string;
  outils?:    null | string;
}

export interface Projet {
  id:                number;
  nomProjet:         string;
  descriptionProjet: string;
  urlProject:        null | string;
  gitLink:           string;
  outils:            string;
  photo:             string;
  date_debut:        null;
  date_fin:          null;
}


@Injectable({providedIn: 'root'})
export class AppointmentService {

  constructor(private http:HttpClient){
  }


  getAppointmentById(id : number) : AppointmentComponent {
    let appointment : AppointmentComponent = new AppointmentComponent();
    //TODO url du type : http://localhost:8081/user/id=id
    this.http.get<User>('http://localhost:9000/personnes/1').subscribe((data) => {
        console.log(data);
        if(data!=null) {
          appointment.id = data.id;
          appointment.title = data.photo;
          // appointment.client = data.prenom;
          // appointment.prof = data.prenom;
          // appointment.slot = data.prenom;
        }
      },
    );
    return appointment;
  }

  addAppointment(appointment : AppointmentComponent) : AppointmentComponent {
    let appointmentAdded: AppointmentComponent = new AppointmentComponent();
    //TODO url du type : http://localhost:8081/appointment/id/update
    this.http.post<User>('http://localhost:9000/personnes/1',appointment).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          appointmentAdded.id = data.id;
          appointmentAdded.title = data.photo;
          // appointmentAdded.client = data.prenom;
          // appointmentAdded.prof = data.prenom;
          // appointmentAdded.slot = data.prenom;
        }
      },
    );
    return appointmentAdded;
  }

  updateAppointment(id : number , appointment : AppointmentComponent) : AppointmentComponent {
    let appointmentUpdated : AppointmentComponent = new AppointmentComponent();
    //TODO url du type : http://localhost:8081/appointment/id/update
    this.http.put<User>('http://localhost:9000/personnes/1',appointment).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          appointmentUpdated.id = data.id;
          appointmentUpdated.title = data.photo;
          // appointmentUpdated.client = data.prenom;
          // appointmentUpdated.prof = data.prenom;
          // appointmentUpdated.slot = data.prenom;
        }
      },
    );
    return appointmentUpdated;
  }

  deleteAppointment(id : number)  {
    //TODO url du type : http://localhost:8081/user/id/delete
    this.http.delete<User>('http://localhost:9000/personnes/1')
  }

}
