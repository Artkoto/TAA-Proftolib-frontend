import { Component, OnInit } from '@angular/core';
import {ProfComponent} from "../prof.component";
import {ProfAuthComponent} from "../prof-auth/prof-auth.component";

@Component({
  selector: 'app-prof-home-page',
  templateUrl: './prof-home-page.component.html',
  styleUrls: ['./prof-home-page.component.scss']
})
export class ProfHomePageComponent implements OnInit {

  prof : ProfComponent = new ProfComponent();
  constructor() { }

  ngOnInit(): void {
    this.prof = ProfAuthComponent.user;
  }

}
