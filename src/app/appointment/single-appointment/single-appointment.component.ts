import {Component, OnInit} from '@angular/core';
import {AppointmentService} from "../../services/appointment.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SlotService} from "../../services/slot.service";
import {AppointmentComponent} from "../appointment.component";
import {SlotComponent} from "../../slot/slot.component";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'app-single-appointment',
  templateUrl: './single-appointment.component.html',
  styleUrls: ['./single-appointment.component.scss']
})
export class SingleAppointmentComponent implements OnInit {

  appointment: AppointmentComponent = new AppointmentComponent();
  slot: SlotComponent = new SlotComponent();

  constructor(private appointmentService: AppointmentService, private slotservice: SlotService,
              private activeroute: ActivatedRoute, private route: Router , private confirmationService: ConfirmationService,) {
  }

  ngOnInit(): void {
    this.appointment = this.appointmentService.getAppointmentById(this.activeroute.snapshot.params['id']);
    this.slot = this.slotservice.getSlotByRdv(this.activeroute.snapshot.params['id']);
  }

  update(){
    let appointmentUpdated : AppointmentComponent ;
    this.confirmationService.confirm({
      message : 'Voulez-vous vraiment modifier le motif de votre rendez-vous ?',
      acceptLabel : 'Modifier',
      rejectLabel : 'Non',
      accept: ()=> {
        appointmentUpdated = this.appointmentService.updateAppointment(this.appointment.id,
          this.appointment);
        return new Promise(
          (resolve,reject) => {
            setTimeout(
              ()=>{
                if (appointmentUpdated.id != 0){

                  this.route.navigate([this.activeroute.parent]);
                }
                else console.log("impossible de modifier")
                resolve(true);
              }, 500
            );
          }
        );
      }
    });

  }

  delete(): void {
    this.confirmationService.confirm({
      message: 'Voulez-vous vraiment supprimer votre rendez-vous ?',
      acceptLabel: 'Supprimer',
      rejectLabel: 'Non',
      accept: () => {
        this.appointmentService.deleteAppointment(this.appointment.id);
        this.route.navigate([this.activeroute.parent]);
      }
    });
  }

}
