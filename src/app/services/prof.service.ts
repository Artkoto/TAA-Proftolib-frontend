import { HttpClient } from '@angular/common/http';
import{Injectable} from '@angular/core';
import {ProfComponent} from "../prof/prof.component";

const apiUrl ='http://localhost:9000/user/';
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
export class ProfService {

  constructor(private http:HttpClient){
  }

  getProfs() : ProfComponent[] {
     let profs : any []= [] ;
    this.http.get<User[]>(apiUrl+'profs').subscribe((data) => {
        console.log(data);
        data.forEach(((e)  => {
            profs.push({
              id : e.id,
              name : e.name,
              lastname : e.lastname ,
              email : e.email,
            })
        }));
      },
    );
    return profs;
  }

  getProfsBySlot(slotId : number) : ProfComponent[] {
    let profs : any []= [] ;
    this.http.get<User[]>(apiUrl+'prof/rdv/id='+slotId).subscribe((data) => {
        console.log(data);
        data.forEach(((e)  => {
          profs.push({
            id : e.id,
            name : e.name,
            lastname : e.lastname ,
            email : e.email,
          })
        }));
      },
    );
    return profs;
  }

  getProfById(id : number) : ProfComponent {
    let prof : ProfComponent = new ProfComponent();
    this.http.get<User>(apiUrl+'prof/id='+id).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          prof.id = data.id;
          prof.name = data.name;
          prof.lastname = data.lastname;
          prof.email = data.email;
        }
      },
    );
    return prof;
  }

  getProfByEmail(email : string) : ProfComponent {
    let prof : ProfComponent = new ProfComponent();
    this.http.get<User>(apiUrl+'prof/email='+email).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          prof.id = data.id;
          prof.name = data.name;
          prof.lastname = data.lastname;
          prof.email = data.email;
        }
      },
    );
    return prof;
  }

  getProfByRdv(rdvId : number) : ProfComponent {
    let prof : ProfComponent = new ProfComponent();
    this.http.get<User>(apiUrl+'prof/rdv/id='+rdvId).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          prof.id = data.id;
          prof.name = data.name;
          prof.lastname = data.lastname;
          prof.email = data.email;
        }
      },
    );
    return prof;
  }

  addProf(prof : ProfComponent) : ProfComponent {
    let profAdded: ProfComponent = new ProfComponent();
    this.http.post<User>(apiUrl+'prof/add',prof).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          profAdded.id = data.id;
          profAdded.name = data.name;
          profAdded.lastname = data.lastname;
          profAdded.email = data.email;
        }
      },
    );
    return profAdded;
  }

  updateProf(id : number , prof : ProfComponent) : ProfComponent {
    let profUpdated : ProfComponent = new ProfComponent();
    this.http.put<User>(apiUrl+'prof/'+id+'/update',prof).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          profUpdated.id = data.id;
          profUpdated.name = data.name;
          profUpdated.lastname = data.lastname;
          profUpdated.email = data.email;
        }
      },
    );
    return profUpdated;
  }

  deleteProf(id : number)  {
    this.http.delete<User>(apiUrl+id+'/delete')
  }

  //filtre pour la recherche de film
  // filter(filtre : string){
  //   return filtre;
  // }

}
