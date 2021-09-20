import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.scss']
})
export class ProfComponent implements OnInit {

  @Input() id : number = 0;
  @Input() name : string = '';
  @Input() lastname : string = '';
  @Input() email : string = '';
  @Input() appointments : any = [];
  @Input() slots : any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
