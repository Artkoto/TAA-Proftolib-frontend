import { Component, OnInit } from '@angular/core';
import {ClientComponent} from "../client.component";
import {ConfirmationService} from "primeng/api";
import {Router} from "@angular/router";
import {ClientService} from "../../services/client.service";
import {ClientAuthComponent} from "../client-auth/client-auth.component";

@Component({
  selector: 'app-client-settings',
  templateUrl: './client-settings.component.html',
  styleUrls: ['./client-settings.component.scss']
})
export class ClientSettingsComponent implements OnInit {

  client : ClientComponent = new ClientComponent();
  constructor(private clientservice :ClientService,
              private confirmationService: ConfirmationService,
              private route: Router ) { }

  ngOnInit(): void {
    this.client = ClientAuthComponent.cloneUser(ClientAuthComponent.user);
  }

  update(){
    let clientUpdated : ClientComponent ;
    this.confirmationService.confirm({
      message : 'Voulez-vous vraiment modifier votre compte ?',
      acceptLabel : 'Modifier',
      rejectLabel : 'Non',
      accept: ()=> {
        clientUpdated = this.clientservice.updateClient(ClientAuthComponent.user.id,
          this.client);
        return new Promise(
          (resolve,reject) => {
            setTimeout(
              ()=>{
                if (clientUpdated.email != ''){
                  ClientAuthComponent.user = ClientAuthComponent.cloneUser(clientUpdated) ;
                  this.client = ClientAuthComponent.cloneUser(clientUpdated);
                  this.route.navigate(['clientApp/']);
                }
                else console.log("impossible de modifier")
                resolve(true);
              }, 500
            );
          }
        );
      }
    });

  }

  delete():void{
    this.confirmationService.confirm({
      message : 'Voulez-vous vraiment supprimer votre compte ?',
      acceptLabel : 'Supprimer',
      rejectLabel : 'Non',
      accept: ()=> {
        this.clientservice.deleteClient(ClientAuthComponent.user.id);
        // this.route.navigate(['/']);
        window.location.reload();
      }
    });
  }

}
