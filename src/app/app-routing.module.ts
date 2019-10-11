import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { RecuteProcessComponent } from './recute-process/recute-process.component';
import { DepartementComponent } from './departement/departement.component';
import { ManagersComponent } from './managers/managers.component';
import { PositionsComponent } from './positions/positions.component';
import { EmailTemplateComponent } from './email-template/email-template.component';


const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component : DashboardComponent },
  { path: 'appointment' , component: AppointmentComponent },
  { path: 'recuteProcess' , component: RecuteProcessComponent },
  { path: 'departement' , component: DepartementComponent },
  { path: 'managers' , component: ManagersComponent },
  { path: 'positions' , component: PositionsComponent },
  { path: 'emailTemplate' , component: EmailTemplateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
