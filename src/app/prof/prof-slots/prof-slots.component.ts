import { Component, OnInit } from '@angular/core';
import {SlotService} from "../../services/slot.service";
import {ProfAuthComponent} from "../prof-auth/prof-auth.component";

@Component({
  selector: 'app-prof-slots',
  templateUrl: './prof-slots.component.html',
  styleUrls: ['./prof-slots.component.scss']
})
export class ProfSlotsComponent implements OnInit {
slots :any=[];
  constructor(private slotService:SlotService) { }

  ngOnInit(): void {
    this.slots = this.slotService.getSlotsByUser(ProfAuthComponent.user.id)
  }

}
