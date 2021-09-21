import { Component, OnInit } from '@angular/core';
import {ProfComponent} from "../prof.component";

@Component({
  selector: 'app-prof-settings',
  templateUrl: './prof-settings.component.html',
  styleUrls: ['./prof-settings.component.scss']
})
export class ProfSettingsComponent implements OnInit {
prof : ProfComponent = new ProfComponent();
  constructor() { }

  ngOnInit(): void {
  }

}
