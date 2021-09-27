import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ProfComponent} from "../prof.component";

@Component({
  selector: 'app-prof-auth',
  templateUrl: './prof-auth.component.html',
  styleUrls: ['./prof-auth.component.scss']
})
export class ProfAuthComponent implements OnInit {

   static authStatus : boolean = false ;
   static user : ProfComponent ;
   login :string ='';
  constructor(private authservice : AuthService , private route: Router ) { }


  ngOnInit(): void {
    ProfAuthComponent.authStatus = this.authservice.profIsAuth ;
  }
  onSingIn(login : string){
    this.authservice.profSingIn(login).then(
      () => {
        //console.log('Connecté avec success');
        this.authservice.clientSingOut();
        ProfAuthComponent.authStatus = this.authservice.profIsAuth;
        this.route.navigate(['profApp/']);
      }
    );
    ProfAuthComponent.user = this.authservice.user;
  }

  onSingOut(){
    this.authservice.profSingOut();
    ProfAuthComponent.authStatus = this.authservice.profIsAuth ;
    this.route.navigate(['profApp/auth']);
  }

  getStatus() : boolean{
    return ProfAuthComponent.authStatus;
  }

}
