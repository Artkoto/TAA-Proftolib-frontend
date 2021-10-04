import { Component, OnInit } from '@angular/core';
import {ClientComponent} from "../client.component";
import {ClientService} from "../../services/client.service";
import {ConfirmationService} from "primeng/api";
import {DialogModule} from 'primeng/dialog';
import {Router} from "@angular/router";
import {ClientAuthComponent} from "../client-auth/client-auth.component";

@Component({
  selector: 'app-client-signup',
  templateUrl: './client-signup.component.html',
  styleUrls: ['./client-signup.component.scss']
})
export class ClientSignupComponent implements OnInit {

  client : ClientComponent = new ClientComponent();
  displayDialog = false;
  constructor(private clientservice :ClientService,
              private confirmationService: ConfirmationService,
              private route: Router ) { }

  ngOnInit(): void {
    this.client = new ClientComponent();
  }

  create(){
    let clientUpdated : ClientComponent ;
    this.confirmationService.confirm({
      message : 'Voulez-vous vraiment creer cet utilisateur?',
      acceptLabel : 'Oui',
      rejectLabel : 'Non',
      accept: ()=> {
        clientUpdated = this.clientservice.addClient(this.client);
        return new Promise(
          (resolve,reject) => {
            setTimeout(
              ()=>{
                if (clientUpdated.email != null && clientUpdated.email !='' ){
                  ClientAuthComponent.user = ClientAuthComponent.cloneUser(clientUpdated) ;
                  this.client = ClientAuthComponent.cloneUser(clientUpdated);
                  this.route.navigate(['clientApp/auth']);
                }
                else this.displayDialog = true;
                resolve(true);
              }, 500
            );
          }
        );
      }
    });

  }
}
