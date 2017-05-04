import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'status',  // <home></home>
  providers: [],
  styleUrls: [ './status.component.css' ],
  templateUrl: './status.component.html'
})
export class StatusComponent implements OnInit {

  @Input() public status;
  public isLive: boolean;
  public statusText = 'Live';

  constructor() {}

  public ngOnInit() {
    console.log('hello `Status` component');
    if ( this.status === 1 ) {
      this.isLive = true;
    } else {
      this.isLive = false;
      this.statusText = 'Final';
    }

  }

}
