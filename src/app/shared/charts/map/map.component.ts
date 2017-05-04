import { Component, ElementRef, Input } from '@angular/core';
import * as D3 from 'd3';
import 'd3-selection-multi';

import 'rxjs';
import { MapService } from './map.service';

@Component({
  selector: 'map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  @Input() public updates: any;

  errorMessage: string;
  height;
  host;
  htmlElement: HTMLElement;
  mapData;
  margin;
  points: number[][] = [];
  projection;
  path;
  svg;
  width;

  constructor (private _element: ElementRef, private _mapService: MapService) {
    console.log("Drawing map on",this._element.nativeElement);
    this.host = D3.select(this._element.nativeElement);
    this.getMapData();
    this.setup();
    this.buildSVG();
  }

  ngOnChanges() {
    if (this.updates.tweets) {
      this.updateDots(this.updates.tweets);
    }
  }

  getMapData() {
    this._mapService.getMapData()
      .subscribe(
        mapData => {
          console.log('getMapData :', mapData);
          if (mapData.features) {
            this.setMap(mapData);
          }
        },
        error =>  this.errorMessage = <any>error
      )
  }

  setup() {
    this.margin = {
      top: 15,
      right: 50,
      bottom: 40,
      left: 50
    };
    this.width = 600; // document.querySelector('#map').clientWidth - this.margin.left - this.margin.right;
    this.height = this.width * 0.6 - this.margin.bottom - this.margin.top;
  }

  buildSVG() {
    this.host.html('');

    this.svg = this.host.append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);
  }

  setMap(mapData) {
    this.mapData = mapData;

    // console.log(mapData);

    var color = D3.scale.linear()
      .range(["rgb(213,222,217)","rgb(69,173,168)","rgb(84,36,55)","rgb(217,91,67)"]);

    color.domain([0,1,2,3]);


    this.projection = D3.geo.albersUsa()
      .translate([this.width /2 , this.height /2 ])
      .scale(650);
    this.path = D3.geo.path()
      .projection(this.projection);

    this.svg.selectAll('path')
      .data(this.mapData.features)
      .enter()
      .append('path')
      .attr('d', this.path)
      .style('stroke', '#fff')
      .style('stroke-width', '1')
      //.style('fill', 'lightgrey');
      .style('fill', function(d) {

          var value = Math.random();

          if(value<0.3) {
            return "#FF1744"
          } else if(value>0.3 && value<=0.5) {
            return "#EF5350"
          } else if(value>0.5 && value<=0.7) {
            return "#4DB6AC"
          } else {
            return "#00897B"
          }
        // // Get data value
        // var value = d.properties.visited;
        //
        // if (value) {
        //   //If value exists…
        //   return color(value);
        // } else {
        //   //If value is undefined…
        //   return "rgb(213,222,217)";
        // }
      });
  }

  updateDots(mapUpdates) {
    this.points = [];
    mapUpdates.forEach((mapUpdate) => {
      if (mapUpdate.coordinates.length > 0) {
        const lon = mapUpdate.coordinates[1];
        const lat = mapUpdate.coordinates[0];
        let location: any = {};
        location.coords = [lon, lat];
        location.username = mapUpdate.username;
        if (this.projection(location.coords)) {
          location.coords = this.projection(location.coords);
          this.points.push(location);
        }
      }
    });
    this.svg.selectAll('circle')
      .data(this.points).enter()
      .append('circle')
      .attrs({
        cx: d => d.coords[0],
        cy: d => d.coords[1],
        r: '4px'
      })
      .styles({
        fill: 'blue',
        opacity: 0.4,
        cursor: 'pointer'
      });
      // .on('click', d => window.open(`http://twitter.com/${d.username}`))
      // .append('title')
      // .text(d => `Location: ${d.coords}`);
  }
}
