import { HttpClient } from '@angular/common/http';
import{Injectable} from '@angular/core';
import {ClientComponent} from "../client/client.component";

//interface data pour la lecture des donnees
//TODO à modifier pour adapter à client
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
export class ClientService {

  constructor(private http:HttpClient){
  }

  getClientById(id : number) : ClientComponent {
  let client : ClientComponent = new ClientComponent();
    //TODO url du type : http://localhost:8081/user/id=id
    this.http.get<User>('http://localhost:9000/personnes/1').subscribe((data) => {
        console.log(data);
      if(data!=null) {
        client.id = data.id;
        client.name = data.nom;
        client.lastname = data.prenom;
      }
      },
    );
    return client;
  }

  getClientByEmail(email : string) : ClientComponent {
    let client : ClientComponent = new ClientComponent();
    //TODO url du type : http://localhost:8081/user/email=email
    this.http.get<User>('http://localhost:9000/personnes/1').subscribe((data) => {
        console.log(data);
        if(data!=null) {
          client.id = data.id;
          client.name = data.nom;
          client.lastname = data.prenom;
        }
      },
    );
    return client;
  }

  addClient(client : ClientComponent) : ClientComponent {
    let clientAdded: ClientComponent = new ClientComponent();
    //TODO url du type : http://localhost:8081/client/id/update
    this.http.post<User>('http://localhost:9000/personnes/1',client).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          clientAdded.id = data.id;
          clientAdded.name = data.nom;
          clientAdded.lastname = data.prenom;
        }
      },
    );
    return clientAdded;
  }

  updateClient(id : number , client : ClientComponent) : ClientComponent {
    let clientUpdated : ClientComponent = new ClientComponent();
    //TODO url du type : http://localhost:8081/client/id/update
    this.http.put<User>('http://localhost:9000/personnes/1',client).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          clientUpdated.id = data.id;
          clientUpdated.name = data.nom;
          clientUpdated.lastname = data.prenom;
        }
      },
    );
    return clientUpdated;
  }

  deleteClient(id : number)  {
    //TODO url du type : http://localhost:8081/user/id/delete
    this.http.delete<User>('http://localhost:9000/personnes/1')
  }

}
