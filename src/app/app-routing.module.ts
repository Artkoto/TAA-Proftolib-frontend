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
import {SingleProfComponent} from "./prof/single-prof/single-prof.component";
import {ProfAuthComponent} from "./prof/prof-auth/prof-auth.component";
import {ClientAuthComponent} from "./client/client-auth/client-auth.component";
import {ProfAuthGuardService} from "./services/prof-auth-guard.service";
import {ClientAuthGuardService} from "./services/client-auth-guard.service";

const routes: Routes = [
  {path:'' ,component: HomePageComponent},
  {path: 'profApp',canActivate: [ProfAuthGuardService], component: ProfHomePageComponent},
  {path: 'profApp/auth', component: ProfAuthComponent},
  {path: 'clientApp',canActivate: [ClientAuthGuardService], component: ClientHomePageComponent},
  {path: 'clientApp/auth', component: ClientAuthComponent},
  {path: 'clientApp/appointments',canActivate: [ClientAuthGuardService], component: ClientAppointmentsComponent},
  {path: 'clientApp/professionals',canActivate: [ClientAuthGuardService], component: ProfViewComponent},
  {path: 'clientApp/settings',canActivate: [ClientAuthGuardService], component: ClientSettingsComponent},
  {path: 'profApp/appointments',canActivate: [ProfAuthGuardService], component: ProfAppointmentsComponent},
  {path: 'profApp/slots',canActivate: [ProfAuthGuardService], component: ProfSlotsComponent},
  {path: 'profApp/settings',canActivate: [ProfAuthGuardService], component: ProfSettingsComponent},
  {path: 'clientApp/professionals/:id',canActivate: [ClientAuthGuardService], component: SingleProfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
