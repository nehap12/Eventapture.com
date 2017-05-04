import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'main-nav',  // <home></home>
  providers: [],
  styleUrls: [ './main-nav.component.css' ],
  templateUrl: './main-nav.component.html'
})
export class MainNavComponent implements OnInit {

  constructor(
    public appState: AppState,
  ) {}

  public ngOnInit() {
    console.log('hello `main-nav` component');
  }

}
