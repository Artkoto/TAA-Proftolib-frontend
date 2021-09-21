import { Component, OnInit } from '@angular/core';
import {ProfComponent} from "../prof.component";

@Component({
  selector: 'app-prof-home-page',
  templateUrl: './prof-home-page.component.html',
  styleUrls: ['./prof-home-page.component.scss']
})
export class ProfHomePageComponent implements OnInit {

  prof : ProfComponent = new ProfComponent();
  constructor() { }

  ngOnInit(): void {
  }

}
