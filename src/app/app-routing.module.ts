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
import { EditPositionComponent } from './positions/edit-position/edit-position.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResponseResetComponent } from './password-reset/response-reset/response-reset.component';
import { RequestResetComponent } from './password-reset/request-reset/request-reset.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';


const routes: Routes = [

  { path: '', redirectTo: '/login',  pathMatch: 'full' },
 
  { 
    path: 'login',
    component : LoginComponent ,
    canActivate : [BeforeLoginService] 
  },
  { 
    path: 'register',
   component : RegisterComponent,
   canActivate : [BeforeLoginService] 
  },
  { path: 'request-password-reset', component : RequestResetComponent },
  { path: 'response-password-reset', component : ResponseResetComponent },
  { 
    path: 'dashboard', 
    component : DashboardComponent,
    canActivate : [AfterLoginService] 
  },
  { path: 'appointment' , 
  component: AppointmentComponent ,
  canActivate : [AfterLoginService]  
},
  { path: 'recuteProcess' , 
  component: RecuteProcessComponent ,
  canActivate : [AfterLoginService]  
},
  { path: 'departement' , 
  component: DepartementComponent ,
  canActivate : [AfterLoginService] ,
  children : [
    {path:'' , component : DepartementListComponent },
    {path:'new' , component : DepartementEditComponent },
    {path:':id/edit' , component : DepartementEditComponent}
]},
  { 
    path: 'managers' , 
    component: ManagersComponent ,
    canActivate : [AfterLoginService] ,
    children : [
    {path:'' , component : ManagersListComponent },
    {path:'new' , component : ManagersEditComponent },
    {path:':id/edit' , component : ManagersEditComponent}
]},
  { 
    path: 'positions' , 
    component: PositionsComponent,
    canActivate : [AfterLoginService]
},
  { 
    path: 'emailTemplate' , 
    component: EmailTemplateComponent ,
    canActivate : [AfterLoginService] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
