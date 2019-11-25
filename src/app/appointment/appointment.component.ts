import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';


declare var $: any;
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})

export class AppointmentComponent implements OnInit {
  title = 'Appointment';

  
  constructor() { }

  ngOnInit(){
    setTimeout(() => {
     $("#calendar").fullCalendar({  
                     header: {
                         left   : 'prev,next today',
                         center : 'title',
                         right  : 'month,agendaWeek,agendaDay'
                     },
                     navLinks   : true,
                     editable   : true,
                     eventLimit : true,
                     events: [
                         {
                             title : 'This is your',
                             start : '2019-11-03T12:30:00',
                             color : '#f9c66a' // override!
                         },
                         {
                          title : 'This is your',
                          start : '2019-11-03T12:30:00',
                          color : '#f9c66a' // override!
                      },
                         {
                             title : 'Your meeting with john',
                             start : '2019-11-07T12:30:00',
                             end   : '2019-11-09',
                             color : "#019efb"
                         },
                         {
                             title  : 'This is Today',
                             start  : '2019-11-12T12:30:00',
                             allDay : false, // will make the time show,
                             color  : "#57cd5f"
                         }
                     ],  // request to load current events
                 });
  }, 100);

  
}
}


