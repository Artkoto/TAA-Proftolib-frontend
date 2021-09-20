import { Component, OnInit } from '@angular/core';
import {SlotService} from "../../services/slot.service";

@Component({
  selector: 'app-single-slot',
  templateUrl: './single-slot.component.html',
  styleUrls: ['./single-slot.component.scss']
})
export class SingleSlotComponent implements OnInit {

  slot : any;
  constructor(private slotService : SlotService) { }

  ngOnInit(): void {
    this.slot = this.slotService.getSlotById(1);
  }

}
