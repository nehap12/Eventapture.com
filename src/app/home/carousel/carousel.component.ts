import {
  Component,
  OnInit
} from '@angular/core';

import {  PathResolver } from '../shared/services/pathResolver.service';

@Component({
  selector: 'carousel',  // <carousel></carousel>
  providers: [],
  styleUrls: [ './carousel.component.css' ],
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {

  constructor() {}

  public ngOnInit() {
    console.log('hello `CarouselComponent` component');
  }
}
