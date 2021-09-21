import { Component, OnInit } from '@angular/core';
import {ClientComponent} from "../client.component";

@Component({
  selector: 'app-client-settings',
  templateUrl: './client-settings.component.html',
  styleUrls: ['./client-settings.component.scss']
})
export class ClientSettingsComponent implements OnInit {

  client : ClientComponent = new ClientComponent();
  constructor() { }

  ngOnInit(): void {
  }

}
