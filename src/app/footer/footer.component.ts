import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'footer',  // <home></home>
  providers: [],
  styleUrls: [ './footer.component.css' ],
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  constructor(
    public appState: AppState,
  ) {}

  public ngOnInit() {
    console.log('hello `Footer` component');
  }

}
