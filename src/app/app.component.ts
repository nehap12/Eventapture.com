/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styleUrls: [
    './app.component.css'
  ],
  template: `
        <header></header>    
        <div class="wrapper clearfix">
          <main class="animated fadeIn" id="main" role="main">
            <router-outlet></router-outlet>
          </main>
        </div>
        <footer></footer>
  `
})
export class AppComponent implements OnInit {
  public eLogo = 'assets/img/e-avatar.png';
  public name = 'Eventapture';
  public url = 'https://twitter.com/eventapture';
  constructor(
    public appState: AppState
  ) {}
  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
