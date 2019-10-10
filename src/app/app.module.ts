import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    PositionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
