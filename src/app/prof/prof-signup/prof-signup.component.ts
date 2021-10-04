import { Component, OnInit } from '@angular/core';
import {ProfComponent} from "../prof.component";
import {ConfirmationService} from "primeng/api";
import {Router} from "@angular/router";
import {ProfService} from "../../services/prof.service";
import {ProfAuthComponent} from "../prof-auth/prof-auth.component";

@Component({
  selector: 'app-prof-signup',
  templateUrl: './prof-signup.component.html',
  styleUrls: ['./prof-signup.component.scss']
})
export class ProfSignupComponent implements OnInit {
  displayDialog = false;
  prof:ProfComponent = new ProfComponent();

  constructor(private profservice:ProfService,
              private confirmationService: ConfirmationService,
              private route: Router ) { }

  ngOnInit(): void {
    this.prof = new ProfComponent();
  }

  create(){
    let profUpdated : ProfComponent ;
    this.confirmationService.confirm({
      message : 'Voulez-vous vraiment creer cet utilisateur?',
      acceptLabel : 'Oui',
      rejectLabel : 'Non',
      accept: ()=> {
        profUpdated = this.profservice.addProf(this.prof);
        return new Promise(
          (resolve,reject) => {
            setTimeout(
              ()=>{
                if (profUpdated.email != null && profUpdated.email !='' ){
                  ProfAuthComponent.user = ProfAuthComponent.cloneUser(profUpdated) ;
                  this.prof = ProfAuthComponent.cloneUser(profUpdated);
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
