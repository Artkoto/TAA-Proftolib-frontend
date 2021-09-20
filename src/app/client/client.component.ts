import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  @Input() id : number = 0;
  @Input() name : string = 'name';
  @Input() lastname : string = 'lastname';
  @Input() email : string = 'email@email';
  @Input() appointments : any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
