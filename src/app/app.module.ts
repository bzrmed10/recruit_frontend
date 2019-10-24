import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { FullCalendarModule } from '@fullcalendar/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { SettingsComponent } from './components/shared/settings/settings.component';
import { ContentComponent } from './components/shared/content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { RecuteProcessComponent } from './recute-process/recute-process.component';
import { DepartementComponent } from './departement/departement.component';
import { ManagersComponent } from './managers/managers.component';
import { PositionsComponent } from './positions/positions.component';
import { LoginComponent } from './login/login.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { DepartementListComponent } from './departement/departement-list/departement-list.component';
import { DepartementEditComponent } from './departement/departement-edit/departement-edit.component';
import { ManagersListComponent } from './managers/managers-list/managers-list.component';
import { ManagersEditComponent } from './managers/managers-edit/managers-edit.component';
import { DetailPositionComponent } from './positions/detail-position/detail-position.component';
import { EditPositionComponent } from './positions/edit-position/edit-position.component';
import { ListPositionComponent } from './positions/list-position/list-position.component';
import { SummaryPipe } from './pipes/summary.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SettingsComponent,
    ContentComponent,
    DashboardComponent,
    AppointmentComponent,
    RecuteProcessComponent,
    DepartementComponent,
    ManagersComponent,
    PositionsComponent,
    LoginComponent,
    EmailTemplateComponent,
    DepartementListComponent,
    DepartementEditComponent,
    ManagersListComponent,
    ManagersEditComponent,
    DetailPositionComponent,
    EditPositionComponent,
    ListPositionComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    NgbPaginationModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FullCalendarModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
