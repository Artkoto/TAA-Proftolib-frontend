import { HttpClient } from '@angular/common/http';
import{Injectable} from '@angular/core';
import {ProfComponent} from "../prof/prof.component";

//interface data pour la lecture des donnees
//TODO à modifier pour adapter à prof

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
export class ProfService {

  constructor(private http:HttpClient){
  }

  getProfs() : ProfComponent[] {
     let profs : any []= [] ;
    //TODO url du type : http://localhost:8081/profs
    this.http.get<User[]>('http://localhost:9000/personnes/api_key=aaa').subscribe((data) => {
        console.log(data);
        data.forEach(((e)  => {
            profs.push({
              id : e.id,
              name : e.nom,
              lastname : e.prenom ,
              // appointments : e.appointments,
              // slots : e.slots,
            })
        }));
      },
    );
    return profs;
  }

  getProfById(id : number) : ProfComponent {
    let prof : ProfComponent = new ProfComponent();
    //TODO url du type : http://localhost:8081/user/id=id
    this.http.get<User>('http://localhost:9000/personnes/1').subscribe((data) => {
        console.log(data);
        if(data!=null) {
          prof.id = data.id;
          prof.name = data.nom;
          prof.lastname = data.prenom;
        }
      },
    );
    return prof;
  }

  getProfByEmail(email : string) : ProfComponent {
    let prof : ProfComponent = new ProfComponent();
    //TODO url du type : http://localhost:8081/user/email=email
    this.http.get<User>('http://localhost:9000/personnes/1').subscribe((data) => {
        console.log(data);
        if(data!=null) {
          prof.id = data.id;
          prof.name = data.nom;
          prof.lastname = data.prenom;
        }
      },
    );
    return prof;
  }

  addProf(prof : ProfComponent) : ProfComponent {
    let profAdded: ProfComponent = new ProfComponent();
    //TODO url du type : http://localhost:8081/prof/id/update
    this.http.post<User>('http://localhost:9000/personnes/1',prof).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          profAdded.id = data.id;
          profAdded.name = data.nom;
          profAdded.lastname = data.prenom;
        }
      },
    );
    return profAdded;
  }

  updateProf(id : number , prof : ProfComponent) : ProfComponent {
    let profUpdated : ProfComponent = new ProfComponent();
    //TODO url du type : http://localhost:8081/prof/id/update
    this.http.put<User>('http://localhost:9000/personnes/1',prof).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          profUpdated.id = data.id;
          profUpdated.name = data.nom;
          profUpdated.lastname = data.prenom;
        }
      },
    );
    return profUpdated;
  }

  deleteProf(id : number)  {
    //TODO url du type : http://localhost:8081/user/id/delete
    this.http.delete<User>('http://localhost:9000/personnes/1')
  }

  //filtre pour la recherche de film
  // filter(filtre : string){
  //   return filtre;
  // }

}
