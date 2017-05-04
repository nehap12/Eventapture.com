import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'rating',  // <home></home>
  providers: [],
  styleUrls: [ './rating.component.css' ],
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Input() public rating: string;

  constructor() { }

  public ngOnInit() {
    console.log('hello `Rating` component');
  }

}
