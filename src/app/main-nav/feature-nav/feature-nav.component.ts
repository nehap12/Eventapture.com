import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'feature-nav',  // <home></home>
  providers: [],
  styleUrls: [ './feature-nav.component.css' ],
  templateUrl: './feature-nav.component.html'
})
export class FeatureNavComponent implements OnInit {

  constructor(){ }

  public ngOnInit() {
    console.log('hello `feature-nav` component');
  }

}
