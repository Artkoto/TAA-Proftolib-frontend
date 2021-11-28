import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {ProfAuthComponent} from "./prof/prof-auth/prof-auth.component";
import {ClientAuthComponent} from "./client/client-auth/client-auth.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proftolib';
  menuItems: MenuItem []=[]  ;

  constructor(private route: Router ) { }

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Aller au choix du site',
        icon: 'pi pi-fw pi-th-large',
        routerLink:'/',
      },
    ];
  }

  checkStatus() : boolean{
    return ProfAuthComponent.authStatus || ClientAuthComponent.authStatus;
  }

  getHomeurl():string{
    return (ProfAuthComponent.authStatus)?'profApp/':'clientApp'
  }
  getUsername():string{
    if(ProfAuthComponent.authStatus){
      return ProfAuthComponent.user.name+' '+ProfAuthComponent.user.lastname;
    }else {
      return ClientAuthComponent.user.name+' '+ClientAuthComponent.user.lastname;
    }

  }

  deconnexion() : void {
      if(ProfAuthComponent.authStatus){
          ProfAuthComponent.topmenudeconnection=true;
          this.route.navigate(['profApp/auth']);
      }else{
        ClientAuthComponent.topmenudeconnection=true;
        this.route.navigate(['clientApp/auth']);
      }
  }

}
