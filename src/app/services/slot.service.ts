import { HttpClient } from '@angular/common/http';
import{Injectable} from '@angular/core';
import {SlotComponent} from "../slot/slot.component";

//interface data pour la lecture des donnees
//TODO à modifier pour adapter à slot

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
export class SlotService {

  constructor(private http:HttpClient){
  }

  getSlotById(id : number) : SlotComponent {
    let slot : SlotComponent = new SlotComponent();
    //TODO url du type : http://localhost:8081/slot/id=id
    this.http.get<User>('http://localhost:9000/personnes/1').subscribe((data) => {
        console.log(data);
        if(data!=null) {
          slot.id = data.id;
          // slot.begin = data.nom;
          // slot.end = data.prenom;
          // slot.appointments = data.prenom;
          // slot.profs = data.prenom;
        }
      },
    );
    return slot;
  }


  addSlot(slot : SlotComponent) : SlotComponent {
    let slotAdded: SlotComponent = new SlotComponent();
    //TODO url du type : http://localhost:8081/slot/id/update
    this.http.post<User>('http://localhost:9000/personnes/1',slot).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          slotAdded.id = data.id;
          // slotAdded.begin = data.nom;
          // slotAdded.end = data.prenom;
          // slotAdded.appointments = data.prenom;
          // slotAdded.profs = data.prenom;

        }
      },
    );
    return slotAdded;
  }

  updateSlot(id : number , slot : SlotComponent) : SlotComponent {
    let slotUpdated : SlotComponent = new SlotComponent();
    //TODO url du type : http://localhost:8081/slot/id/update
    this.http.put<User>('http://localhost:9000/personnes/1',slot).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          slotUpdated.id = data.id;
          // slotUpdated.begin = data.nom;
          // slotUpdated.end = data.prenom;
          // slotUpdated.appointments = data.prenom;
          // slotUpdated.profs = data.prenom;
        }
      },
    );
    return slotUpdated;
  }

}
