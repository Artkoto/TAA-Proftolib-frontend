import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ClientComponent} from "../client.component";

@Component({
  selector: 'app-client-auth',
  templateUrl: './client-auth.component.html',
  styleUrls: ['./client-auth.component.scss']
})
export  class ClientAuthComponent implements OnInit {

  static authStatus : boolean = false ;
  static user : ClientComponent ;
  login : string = '';
  constructor(private authservice : AuthService , private route: Router) { }

  ngOnInit(): void {
    ClientAuthComponent.authStatus = this.authservice.clientIsAuth ;
  }

  onSingIn(login:string){
    this.authservice.clientSingIn(login).then(
      () => {
        //console.log('Connecté avec success');
        this.authservice.profSingOut();
        this.route.navigate(['clientApp/']);
      }
    );
    ClientAuthComponent.user = this.authservice.user;
  }

  onSingOut(){
    this.authservice.clientSingOut();
    ClientAuthComponent.authStatus = this.authservice.clientIsAuth ;
    this.route.navigate(['clientApp/auth']);
  }

  getStatus() : boolean{
    return ClientAuthComponent.authStatus;
  }

  static  cloneUser(user : ClientComponent) : ClientComponent {
    let userClone :  ClientComponent = new ClientComponent();
    userClone.id = user.id;
    userClone.name = user.name;
    userClone.lastname = user.lastname;
    userClone.email = user.email;
    return userClone;
  }

}
