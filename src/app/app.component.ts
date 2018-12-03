import {Component, ViewChild} from '@angular/core';
import {ClrDatagrid} from '@clr/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  adverts: {
    num: number;
    progress: string;
    trading_code: string;
    debtor: string;
    organizer: string;
    bidding: string;
    advert_type: string;
    responsible: string;
    comment: string;
  }[] = [{
    num: 1,
    progress: '00000000000000000000',
    trading_code: '9970-GMPD',
    debtor: 'OOO "IBM 2000"',
    organizer: 'OOO «Heaven»',
    bidding: 'Beacon',
    advert_type: 'public',
    responsible: 'Authot1',
    comment: 'Check with fennec whether it is necessary to publish the results of the first auction in the local media'
  },
    {
      num: 2,
      progress: '00000100000100001000',
      trading_code: '90293 HDHKW',
      debtor: 'OOO "Hello world"',
      organizer: 'Apple',
      bidding: 'Flat',
      advert_type: 'first',
      responsible: 'Author2',
      comment: 'just comment'
    }];
}
