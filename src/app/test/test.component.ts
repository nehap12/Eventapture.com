import { Component, ElementRef, Input } from '@angular/core';
import 'rxjs';

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  constructor (private _element: ElementRef) {

  }

  ngOnChanges() {
  }

}
