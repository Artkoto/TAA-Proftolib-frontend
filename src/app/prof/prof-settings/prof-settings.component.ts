import { Component, OnInit } from '@angular/core';
import {ProfComponent} from "../prof.component";
import {ProfAuthComponent} from "../prof-auth/prof-auth.component";
import {ProfService} from "../../services/prof.service";
import {Router} from "@angular/router";
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-prof-settings',
  templateUrl: './prof-settings.component.html',
  styleUrls: ['./prof-settings.component.scss']
})
export class ProfSettingsComponent implements OnInit {
prof : ProfComponent = new ProfComponent();
  constructor(private profservice :ProfService,
              private confirmationService: ConfirmationService,
              private route: Router ) { }

  ngOnInit(): void {
    this.prof =ProfAuthComponent.cloneUser(ProfAuthComponent.user);
  }

  update(){
    let profUpdated : ProfComponent ;
    this.confirmationService.confirm({
      message : 'Voulez-vous vraiment modifier votre compte ?',
      acceptLabel : 'Modifier',
      rejectLabel : 'Non',
      accept: ()=> {
        profUpdated = this.profservice.updateProf(ProfAuthComponent.user.id,
          this.prof);
        return new Promise(
          (resolve,reject) => {
            setTimeout(
              ()=>{
                if (profUpdated.email != ''){
                  ProfAuthComponent.user = ProfAuthComponent.cloneUser(profUpdated) ;
                  this.prof = ProfAuthComponent.cloneUser(profUpdated);
                  this.route.navigate(['profApp/']);
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
      this.profservice.deleteProf(ProfAuthComponent.user.id);
        window.location.reload();
    }
    });
  }

}
