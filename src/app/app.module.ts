import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
import { PathResolver } from './shared/services/pathResolver.service';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { CarouselComponent } from './home/carousel';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { XLargeDirective } from './home/x-large';
import { SnapComponent } from './profile/snap';
import { CardComponent } from './shared/card';
import { CardFooterComponent } from './shared/card/footer';
import { ReactComponent } from './shared/react';
import { RatingComponent } from './shared/card/rating';
import { StatusComponent } from './shared/card/status';
import { StoriesComponent } from './stories';
import { MainNavComponent } from './main-nav';
import { HeadlineComponent } from './shared/card/headline';
import { SectionHomeComponent } from './section-home';

import { BarChartComponent } from './shared/charts/bar';
import { MapComponent } from './shared/charts/map/map.component';

import '../styles/styles.scss';
import '../styles/headings.css';
import {MapService} from './shared/charts/map/map.service';
import {StoriesHeadingComponent} from './stories/heading/heading.component';

import { SnapshotCameraComponent } from './shared/snapshot-camera/snapshot-camera.component';
import { VideoCameraComponent } from './shared/video-camera/video-camera.component';
import { SectionalCardComponent } from './section-home/sectional-card/sectional-card.component';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
  PathResolver,
  MapService
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CarouselComponent,
    HomeComponent,
    NoContentComponent,
    XLargeDirective,
    SnapComponent,
    HeadlineComponent,
    RatingComponent,
    StatusComponent,
    CardComponent,
    CardFooterComponent,
    ReactComponent,
    StoriesComponent,
    MainNavComponent,
    SectionHomeComponent,
    BarChartComponent,
    MapComponent,
    StoriesHeadingComponent,
    SnapshotCameraComponent,
    VideoCameraComponent,
    SectionalCardComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) {}

  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
