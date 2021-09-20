import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client.service";

@Component({
  selector: 'app-single-client',
  templateUrl: './single-client.component.html',
  styleUrls: ['./single-client.component.scss']
})
export class SingleClientComponent implements OnInit {
  client : any;

  constructor(private  clientService : ClientService) { }

  ngOnInit(): void {
    this.client = this.clientService.getClientById(0);;
  }

}
