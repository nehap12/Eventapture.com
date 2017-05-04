import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import {  PathResolver } from '../shared/services/pathResolver.service';

@Component({
  selector: 'home',  // <home></home>
  providers: [Title],
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };

    public storyImage = 'trump.jpg';
    public storyImagePathTest = '';

  // TypeScript public modifiers
  constructor(
    public appState: AppState,
    public title: Title,
    public pathResolver: PathResolver
  ) {
        this.storyImagePathTest = pathResolver.resolvePath(this.storyImage, 'image');
  }

  public ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
