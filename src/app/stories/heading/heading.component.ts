import { Component, ElementRef, Input } from '@angular/core';
import 'rxjs';

@Component({
  selector: 'stories-heading-component',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class StoriesHeadingComponent {

  @Input() public text: string;

  constructor (private _element: ElementRef) {

  }

  ngOnChanges() {
  }

}
