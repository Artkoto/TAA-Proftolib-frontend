
import {ProfService} from "./prof.service";
import {ClientService} from "./client.service";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthService {
  clientIsAuth = false ;
  profIsAuth = false ;
  user : any = null  ;

  constructor(private clientservice: ClientService , private profservice :ProfService ) {
  }
  clientSingIn(login : string){
    this.user = this.clientservice.getClientByEmail(login);
    return new Promise(
      (resolve,reject) => {
        setTimeout(
          ()=>{
            if (this.user.id != 0) {
              this.clientIsAuth = true;
            }
           resolve(true);
          }, 100
        );
      }
    );
  }

  clientSingOut(){
    this.user = null;
    this.clientIsAuth = false ;
  }

  profSingIn(login : string){
    this.user = this.profservice.getProfByEmail(login)
    return new Promise(
      (resolve,reject) => {
        setTimeout(
          ()=>{
            if (this.user.id != 0) {
              this.profIsAuth = true;
            }
            resolve(true);
          }, 500
        );
      }
    );
  }

  profSingOut(){
    this.user=null;
    this.profIsAuth = false ;
  }
}
