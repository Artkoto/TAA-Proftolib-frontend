import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";



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
import { ProfSignupComponent } from './prof/prof-signup/prof-signup.component';
import { ProfAuthComponent } from './prof/prof-auth/prof-auth.component';
import { ProfAppointmentsComponent } from './prof/prof-appointments/prof-appointments.component';
import { SingleSlotComponent } from './slot/single-slot/single-slot.component';
import { ClientHomePageComponent } from './client/client-home-page/client-home-page.component';
import { ProfHomePageComponent } from './prof/prof-home-page/prof-home-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ClientSettingsComponent } from './client/client-settings/client-settings.component';
import { ProfSettingsComponent } from './prof/prof-settings/prof-settings.component';
import { AppointmentViewComponent } from './appointment/appointment-view/appointment-view.component';
import { ProfSlotsComponent } from './prof/prof-slots/prof-slots.component';

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
    ProfViewComponent,
    ProfSignupComponent,
    ProfAuthComponent,
    ProfAppointmentsComponent,
    SingleSlotComponent,
    ClientHomePageComponent,
    ProfHomePageComponent,
    HomePageComponent,
    ClientSettingsComponent,
    ProfSettingsComponent,
    AppointmentViewComponent,
    ProfSlotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
