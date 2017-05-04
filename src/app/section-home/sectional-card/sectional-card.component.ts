import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { AppState } from '../app.service';

import 'rxjs/Rx';
import * as d3 from 'd3';

@Component({
  selector: 'sectional-card',  // <home></home>
  providers: [],
  styleUrls: [ './sectional-card.component.css' ],
  templateUrl: './sectional-card.component.html'
})
export class SectionalCardComponent implements OnInit {

  @Input() public image: string;
  @Input() public headline: string;
  @Input() public tags: string;
  @Input() public upward: string;
  @Input() public downward: string;
  @Input() public graph: string;

  constructor() {}

  public ngOnInit() {
    console.log('hello `Sectional Story Card` component');

    setTimeout(() => { this.drawInteractionChart('popularityChart' + this.graph); }, 0);

  }

  drawInteractionChart(chardID){

    let margin = {top: 30, right: 20, bottom: 5, left: 50},
      width = 400 - margin.left - margin.right,
      height = 100 - margin.top - margin.bottom;

    let parseDate = d3.time.format("%d-%b-%y").parse;

    let x = d3.time.scale().range([0, width]);
    let y = d3.scale.linear().range([height, 0]);

    let xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom")
      .ticks(5);

    let yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(5);

    let area = d3.svg.area()
      .x(function(d:any) { return x(d.date); })
      .y0(height)
      .y1(function(d:any) { return y(d.close); });

    let valueline = d3.svg.line()
      .x(function(d:any) { return x(d.date); })
      .y(function(d:any) { return y(d.close); });

    let svg = d3.select("#" + chardID)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(0,30)") //+ margin.left + "," + margin.top + ")")
      .attr("fill","#e5fbff");

    // d3.csv("assets/data.csv", function(error, data) {
    //   data.forEach(function(d:any) {
    //     d.date = parseDate(d.date);
    //     d.close = +d.close;
    //   });

    var count = 0;
    var dataset:any;

    dataset = d3.range(10).map(function() {
      count++;
      return {
        date: count,
        close: Math.random()
      }
    });


    // Scale the range of the data
    x.domain(d3.extent(dataset, function(d:any) { return d.date; }));
    y.domain([0, d3.max(dataset, function(d:any) { return d.close; })]);

    // Add the filled area
    svg.append("path")
      .datum(dataset)
      .attr("class", "area")
      .attr("d", area);

    // Add the valueline path.
    svg.append("path")
      .attr("d", valueline(dataset))
      .attr("stroke","#04d8f4")
      .attr("stroke-width","3px");

  }
}
