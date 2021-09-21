import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfHomePageComponent} from "./prof/prof-home-page/prof-home-page.component";
import {ClientHomePageComponent} from "./client/client-home-page/client-home-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {ClientAppointmentsComponent} from "./client/client-appointments/client-appointments.component";
import {ProfViewComponent} from "./prof/prof-view/prof-view.component";
import {ClientSettingsComponent} from "./client/client-settings/client-settings.component";
import {ProfAppointmentsComponent} from "./prof/prof-appointments/prof-appointments.component";
import {ProfSlotsComponent} from "./prof/prof-slots/prof-slots.component";
import {ProfSettingsComponent} from "./prof/prof-settings/prof-settings.component";

const routes: Routes = [
  {path:'' , component: HomePageComponent},
  {path: 'profApp', component: ProfHomePageComponent},
  {path: 'clientApp', component: ClientHomePageComponent},
  {path: 'clientApp/appointments', component: ClientAppointmentsComponent},
  {path: 'clientApp/professionals', component: ProfViewComponent},
  {path: 'clientApp/settings', component: ClientSettingsComponent},
  {path: 'profApp/appointments', component: ProfAppointmentsComponent},
  {path: 'profApp/slots', component: ProfSlotsComponent},
  {path: 'profApp/settings', component: ProfSettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
