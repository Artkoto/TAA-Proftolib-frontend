import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ProfComponent } from './prof/prof.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { SlotComponent } from './slot/slot.component';
import { ClientAppointmentsComponent } from './client/client-appointments/client-appointments.component';
import { ClientAuthComponent } from './client/client-auth/client-auth.component';
import { ClientSignupComponent } from './client/client-signup/client-signup.component';
import { SingleProfComponent } from './prof/single-prof/single-prof.component';
import { SingleClientComponent } from './client/single-client/single-client.component';
import { SingleAppointmentComponent } from './appointment/single-appointment/single-appointment.component';
import { ProfViewComponent } from './prof/prof-view/prof-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ProfComponent,
    AppointmentComponent,
    SlotComponent,
    ClientAppointmentsComponent,
    ClientAuthComponent,
    ClientSignupComponent,
    SingleProfComponent,
    SingleClientComponent,
    SingleAppointmentComponent,
    ProfViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
