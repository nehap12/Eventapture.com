import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'headline',  // <home></home>
  providers: [],
  styleUrls: [ './headline.component.css' ],
  templateUrl: './headline.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HeadlineComponent implements OnInit {

  @Input() public text;
  @Input() public stretch;

  public threeColumn  = false;
  public twoColumn = false;

  constructor() {
  }

  public ngOnInit() {
    console.log('hello `Headline` component');
    if ( this.stretch === 2 ) {
      this.twoColumn = true;
      this.threeColumn = false;
    } else if ( this.stretch === 3 ) {
      this.twoColumn = false;
      this.threeColumn = true;
    }
  }

}
