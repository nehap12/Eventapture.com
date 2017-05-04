import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'react',  // <home></home>
  providers: [],
  styleUrls: [ './react.component.css' ],
  templateUrl: './react.component.html'
})
export class ReactComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
    console.log('hello `ReactComponent` component');
  }

}
