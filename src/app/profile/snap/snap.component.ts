import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'snap',  // <home></home>
  providers: [],
  styleUrls: [ './snap.component.css' ],
  templateUrl: './snap.component.html'
})
export class SnapComponent implements OnInit {

  constructor() {
  }

  public ngOnInit() {
    console.log('hello `Snap` component');
  }

}
