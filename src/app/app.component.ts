import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {ProfAuthComponent} from "./prof/prof-auth/prof-auth.component";
import {ClientAuthComponent} from "./client/client-auth/client-auth.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proftolib';
  isConnectProf: boolean = ProfAuthComponent.authStatus ;
  isConnectclient: boolean =ClientAuthComponent.authStatus;
  menuItems: MenuItem []=[]  ;

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink:'/',
      },
      //
    /*  {
        label: 'File',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {label: 'Project'},
            {label: 'Other'},
          ]
        },
          {label: 'Open'},
          {label: 'Quit'}
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {label: 'Delete', icon: 'pi pi-fw pi-trash'},
          {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
        ]
      },*/
      //

    ];
  }

}
