import { Component, OnInit } from '@angular/core';
import { CurrentEvents, Event } from '../CurrentEvents';
import { SportsDBService } from '../sports-db.service';

@Component({
  selector: 'app-current-events',
  templateUrl: './current-events.component.html',
  styleUrls: ['./current-events.component.css'],
  providers: [SportsDBService]
})
export class CurrentEventsComponent implements OnInit {
  eventsList?: CurrentEvents;
  filteredEvents: Event[];

  private _listFilter: string = "";
  get listFilter(): string{
    return this._listFilter;
}
set listFilter(value:string){
    this._listFilter = value;
    console.log("In Setter:", value);
    this.filteredEvents = this.performFilter(value);
}
  
  constructor(private currentEvents: SportsDBService) { }

  ngOnInit(): void {
    this.currentEvents.GetEvents().subscribe(
      (response:any) => {console.log(response);
        this.eventsList= response; 
        this.filteredEvents = this.eventsList.events;
      });
    
  }

  performFilter(filterBy: string) {
    console.log(filterBy);
    filterBy = filterBy.toLocaleLowerCase();
    return this.eventsList.events.filter( (event: Event) => event.strEvent.toLocaleLowerCase().includes(filterBy));
  }
}
