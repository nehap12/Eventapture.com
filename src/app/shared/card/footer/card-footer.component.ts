import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'card-footer',  // <home></home>
  providers: [],
  styleUrls: [ './card-footer.component.css' ],
  templateUrl: './card-footer.component.html'
})
export class CardFooterComponent implements OnInit {

  @Input() private status;
  private isLive: boolean;
  private statusText = 'Live';

  constructor() {
  }

  public ngOnInit() {
    console.log('hello `Status` component');
    if (this.status === 1) {
      this.isLive = true;
    } else {
      this.isLive = false;
      this.statusText = 'Final';
    }

  }

}
