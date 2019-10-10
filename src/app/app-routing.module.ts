import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { RecuteProcessComponent } from './recute-process/recute-process.component';


const routes: Routes = [

  { path: '', redirectTo: '/dashborad', pathMatch: 'full' },
  { path: 'dashboard', component : DashboardComponent },
  { path: 'appointment' , component: AppointmentComponent },
  { path: 'recuteProcess' , component: RecuteProcessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
