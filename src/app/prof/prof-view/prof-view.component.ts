import { Component, OnInit } from '@angular/core';
import {ProfService} from "../../services/prof.service";

@Component({
  selector: 'app-prof-view',
  templateUrl: './prof-view.component.html',
  styleUrls: ['./prof-view.component.scss']
})
export class ProfViewComponent implements OnInit {

  profs : any =[] ;
  constructor(private profService : ProfService) { }

  ngOnInit(): void {
    this.profs = this.profService.getProfs();
  }

}
