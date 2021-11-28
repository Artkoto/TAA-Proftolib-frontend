import {Component, OnInit} from '@angular/core';
import {ProfComponent} from "../prof.component";
import {SlotComponent} from "../../slot/slot.component";
import {AppointmentService} from "../../services/appointment.service";
import {SlotService} from "../../services/slot.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmationService} from "primeng/api";
import {ProfService} from "../../services/prof.service";
import {AppointmentComponent} from "../../appointment/appointment.component";
import {ClientComponent} from "../../client/client.component";
import {ClientAuthComponent} from "../../client/client-auth/client-auth.component";

@Component({
  selector: 'app-single-prof',
  templateUrl: './single-prof.component.html',
  styleUrls: ['./single-prof.component.scss']
})
export class SingleProfComponent implements OnInit {

  slots: any = [];
  displayDialog = false;
  slot: SlotComponent = new SlotComponent();
  prof: ProfComponent = new ProfComponent();
  appointment: AppointmentComponent = new AppointmentComponent();

  constructor(private appointmentService: AppointmentService, private slotservice: SlotService, private profservice: ProfService,
              private activeroute: ActivatedRoute, private route: Router, private confirmationService: ConfirmationService,) {
  }

  ngOnInit(): void {
    this.prof = this.profservice.getProfById(this.activeroute.snapshot.params['id'])
    new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.slots = this.slotservice.getSlotsByUser(this.prof.id)
            resolve(true);
          }, 100
        );
      }
    );
  }

  prendrerdv(): void {
    let rdvUpdated: AppointmentComponent= new AppointmentComponent();
    this.confirmationService.confirm({
      message: 'Voulez-vous vraiment prendre ce rendez-vous?',
      acceptLabel: 'Oui',
      rejectLabel: 'Non',
      accept: () => {
        if (this.slot.id != 0) {
          rdvUpdated = this.appointmentService.addAppointment(this.appointment, ClientAuthComponent.user,
            this.prof, this.slot);
        }
        return new Promise(
          (resolve, reject) => {
            setTimeout(
              () => {
                if (rdvUpdated.id != 0) {
                  this.route.navigate([this.activeroute.parent]);
                } else this.displayDialog = true;
                resolve(true);
              }, 500
            );
          }
        );
      }
    });

  }
}
