import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  title = 'Appointment';
  calendarPlugins = [dayGridPlugin]; 
  constructor() { }

  ngOnInit() {
  }

}
