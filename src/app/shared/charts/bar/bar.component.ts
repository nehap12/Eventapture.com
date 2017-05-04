import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ViewChild,
  ElementRef
} from '@angular/core';

import { AppState } from '../app.service';

import 'rxjs/Rx';
import * as d3 from 'd3';

@Component({
  selector: 'chart-bar',  // <home></home>
  providers: [],
  styleUrls: [ './bar.component.css' ],
  templateUrl: './bar.component.html'
})
export class BarChartComponent implements OnInit, OnChanges {

  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private data: Array<any>;
  private margin: any = { top: 5, bottom: 5, left: 5, right: 5};
  private chart: any;
  private width: number;
  private height: number;
  private xScale: any;
  private yScale: any;
  private colors: any;
  private xAxis: any;
  private yAxis: any;

  constructor() { }

  public ngOnInit() {
    this.createChart();
    if (this.data) {
      this.updateChart();
    }
  }

  public ngOnChanges() {
    if (this.chart) {
      this.updateChart();
    }
  }

  private createChart() {
    //This code works with D3 V4

    // let element = this.chartContainer.nativeElement;
    // this.width = 528; // element.offsetWidth - this.margin.left - this.margin.right;
    // this.height = 100; // element.offsetHeight - this.margin.top - this.margin.bottom;
    // let svg = d3.select(element).append('svg')
    //   .attr('width', element.offsetWidth)
    //   .attr('height', element.offsetHeight);
    //
    // // chart plot area
    // this.chart = svg.append('g')
    //   .attr('class', 'bars')
    //   .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);
    //
    // // define X & Y domains
    // let xDomain = this.data.map((d) => d[0]);
    // let yDomain = [0, d3.max(this.data, (d) => d[1])];
    //
    // // create scales
    // this.xScale = d3.scaleBand().padding(0.1).domain(xDomain).rangeRound([0, this.width]);
    // this.yScale = d3.scaleLinear().domain(yDomain).range([this.height, 0]);
    //
    // // bar colors
    // this.colors = d3.scaleLinear().domain([0, this.data.length]).range(<any[]> ['#eaebed', '#eaebed']);
    //
    // // x & y axis
    // this.xAxis = svg.append('g')
    //   .attr('class', 'axis axis-x')
    //   .attr('transform', `translate(${this.margin.left}, ${this.margin.top + this.height})`)
    //   .call(d3.axisBottom(this.xScale));
    // this.yAxis = svg.append('g')
    //   .attr('class', 'axis axis-y')
    //   .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
    //   .call(d3.axisLeft(this.yScale));
  }

  private updateChart() {

  }

}
