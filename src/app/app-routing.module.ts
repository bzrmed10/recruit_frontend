import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { RecuteProcessComponent } from './recute-process/recute-process.component';
import { DepartementComponent } from './departement/departement.component';
import { ManagersComponent } from './managers/managers.component';
import { PositionsComponent } from './positions/positions.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { DepartementListComponent } from './departement/departement-list/departement-list.component';
import { DepartementEditComponent } from './departement/departement-edit/departement-edit.component';
import { ManagersListComponent } from './managers/managers-list/managers-list.component';
import { ManagersEditComponent } from './managers/managers-edit/managers-edit.component';


const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component : DashboardComponent },
  { path: 'appointment' , component: AppointmentComponent },
  { path: 'recuteProcess' , component: RecuteProcessComponent },
  { path: 'departement' , component: DepartementComponent ,children : [
    {path:'' , component : DepartementListComponent },
    {path:'new' , component : DepartementEditComponent },
    {path:':id/edit' , component : DepartementEditComponent}
]},
  { path: 'managers' , component: ManagersComponent ,children : [
    {path:'' , component : ManagersListComponent },
    {path:'new' , component : ManagersEditComponent },
    {path:':id/edit' , component : ManagersEditComponent}
]},
  { path: 'positions' , component: PositionsComponent },
  { path: 'emailTemplate' , component: EmailTemplateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
