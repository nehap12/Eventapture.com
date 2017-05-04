import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'header',  // <home></home>
  providers: [],
  styleUrls: [ './header.component.css' ],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(
    public appState: AppState,
  ) {}

  public ngOnInit() {
    console.log('hello `Header` component');
  }

}
