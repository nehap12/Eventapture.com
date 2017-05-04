import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'footer',  // <home></home>
  providers: [],
  styleUrls: [ './card-footer.component.css' ],
  templateUrl: './card-footer.component.html'
})
export class FooterComponent implements OnInit {

  constructor(){}

  public ngOnInit() {
    console.log('hello `Footer` component');
  }

}
