import { Component } from '@angular/core';
import { AuthLibService } from 'projects/auth-lib/src/public-api';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.scss']
})
export class FlightsSearchComponent  {

  constructor(private service: AuthLibService) {
    console.log('User Name', this.service.user);
  }

}
