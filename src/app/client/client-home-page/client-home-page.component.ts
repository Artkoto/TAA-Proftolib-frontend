import { Component, OnInit } from '@angular/core';
import {ClientComponent} from "../client.component";
import {ClientAuthComponent} from "../client-auth/client-auth.component";

@Component({
  selector: 'app-client-home-page',
  templateUrl: './client-home-page.component.html',
  styleUrls: ['./client-home-page.component.scss']
})
export class ClientHomePageComponent implements OnInit {

  client : ClientComponent = new ClientComponent();
  constructor() { }

  ngOnInit(): void {
    this.client = ClientAuthComponent.user;

  }

}
