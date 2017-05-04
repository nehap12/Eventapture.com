import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { AppState } from '../app.service';
// import { StorySnapDetail } from '../somewhere/somewhere';

import 'rxjs/add/operator/map';

@Component({
  selector: 'card',  // <home></home>
  providers: [],
  styleUrls: [ './card.component.css' ],
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() public image: string;
  @Input() public rating: string;
  @Input() public status: string;
  @Input() public headline: string;
  @Input() public headlineStretch: number;
  // @Input() snapDetail: StorySnapDetail;

  public chartData: Array<any>;

  constructor() {}

  public ngOnInit() {
    console.log('hello `Story Card` component');

    setTimeout(() => {
      this.generateData();

      // change the data periodically
      setInterval(() => this.generateData(), 3000);
    }, 1000);
  }

  private generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
  }

}
