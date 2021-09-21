import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  @Input() id : number = 0;
  @Input() name : string = 'Client_name';
  @Input() lastname : string = 'Client_lastname';
  @Input() email : string = 'Client_email@email';
  @Input() appointments : any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
