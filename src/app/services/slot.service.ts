import { HttpClient } from '@angular/common/http';
import{Injectable} from '@angular/core';
import {SlotComponent} from "../slot/slot.component";
import {ProfComponent} from "../prof/prof.component";

const apiUrl ='http://localhost:9000/slot/';
export interface User {
  id:       number;
  email:    string;
  name:     string;
  lastname: string;
}
export interface Slot {
  id:    number;
  debut: Date;
  fin:   Date;
}
export interface Appointment {
  id:    number;
  title: string;
}


@Injectable({providedIn: 'root'})
export class SlotService {

  constructor(private http:HttpClient){
  }

  getSlots() : SlotComponent[] {
    let slots : any []= [] ;
    this.http.get<Slot[]>(apiUrl+'all').subscribe((data) => {
        console.log(data);
        data.forEach(((e)  => {
          slots.push({
            id : e.id,
            begin : e.debut,
            end : e.fin ,
          })
        }));
      },
    );
    return slots;
  }

  getSlotsByUser(id : number) : SlotComponent[] {
    let slots : any []= [] ;
    this.http.get<Slot[]>(apiUrl+'user/id='+id).subscribe((data) => {
        console.log(data);
        data.forEach(((e)  => {
          slots.push({
            id : e.id,
            begin : e.debut,
            end : e.fin ,
          })
        }));
      },
    );
    return slots;
  }

  getSlotById(id : number) : SlotComponent {
    let slot : SlotComponent = new SlotComponent();
    this.http.get<Slot>(apiUrl+'id='+id).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          slot.id = data.id;
           slot.begin = data.debut;
           slot.end = data.fin;
        }
      },
    );
    return slot;
  }

  getSlotByRdv(id : number) : SlotComponent {
    let slot : SlotComponent = new SlotComponent();
    this.http.get<Slot>(apiUrl+'rdv/id='+id).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          slot.id = data.id;
          slot.begin = data.debut;
          slot.end = data.fin;
        }
      },
    );
    return slot;
  }


  addSlot(slot : SlotComponent) : SlotComponent {
    let slotAdded: SlotComponent = new SlotComponent();
    this.http.post<Slot>(apiUrl+'add',slot).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          slotAdded.id = data.id;
          slotAdded.begin = data.debut;
          slotAdded.end = data.fin;
        }
      },
    );
    return slotAdded;
  }

  updateSlot(id : number , slot : SlotComponent) : SlotComponent {
    let slotUpdated : SlotComponent = new SlotComponent();
    this.http.put<Slot>(apiUrl+id+'/update',slot).subscribe((data) => {
        console.log(data);
        if(data!=null) {
          slotUpdated.id = data.id;
          slotUpdated.begin = data.debut;
          slotUpdated.end = data.fin;
        }
      },
    );
    return slotUpdated;
  }

}
