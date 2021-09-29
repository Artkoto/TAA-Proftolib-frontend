import { HttpClient } from '@angular/common/http';
import{Injectable} from '@angular/core';
import {ClientComponent} from "../client/client.component";

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
export class ClientService {

  constructor(private http:HttpClient){
  }

  getClients() : ClientComponent[] {
    let clients : any []= [] ;
    this.http.get<User[]>(apiUrl+'clients').subscribe((data) => {
        console.log(data);
        data.forEach(((e)  => {
          clients.push({
            id : e.id,
            name : e.name,
            lastname : e.lastname ,
            email : e.email,
          })
        }));
      },
    );
    return clients;
  }

  getClientById(id : number) : ClientComponent {
    let client : ClientComponent = new ClientComponent();
    this.http.get<User>(apiUrl+'client/id='+id).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          client.id = data.id;
          client.name = data.name;
          client.lastname = data.lastname;
          client.email = data.email;
        }
      },
    );
    return client;
  }

  getClientByEmail(email : string) : ClientComponent {
    let client : ClientComponent = new ClientComponent();
    this.http.get<User>(apiUrl+'client/email='+email).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          client.id = data.id;
          client.name = data.name;
          client.lastname = data.lastname;
          client.email = data.email;
        }
      },
    );
    return client;
  }

  getClientByRdv(rdvId : number) : ClientComponent {
    let client : ClientComponent = new ClientComponent();
    this.http.get<User>(apiUrl+'client/rdv/id='+rdvId).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          client.id = data.id;
          client.name = data.name;
          client.lastname = data.lastname;
          client.email = data.email;
        }
      },
    );
    return client;
  }

  addClient(client : ClientComponent) : ClientComponent {
    let clientAdded: ClientComponent = new ClientComponent();
    this.http.post<User>(apiUrl+'client/add',client).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          clientAdded.id = data.id;
          clientAdded.name = data.name;
          clientAdded.lastname = data.lastname;
          clientAdded.email = data.email;
        }
      },
    );
    return clientAdded;
  }

  updateClient(id : number , client : ClientComponent) : ClientComponent {
    let clientUpdated : ClientComponent = new ClientComponent();
    this.http.put<User>(apiUrl+'prof/'+id+'/update?email='+client.email+
      '&name='+client.name
      +'&lastname='+client.lastname,client).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          clientUpdated.id = data.id;
          clientUpdated.name = data.name;
          clientUpdated.lastname = data.lastname;
          clientUpdated.email = data.email;
        }
      },
    );
    return clientUpdated;
  }

  deleteClient(id : number)  {
    this.http.delete<User>(apiUrl+id+'/delete').subscribe();
  }

}
