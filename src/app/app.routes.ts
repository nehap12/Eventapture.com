import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { SectionHomeComponent } from './section-home';
import { AboutComponent } from './about';
import { StoriesComponent } from './stories';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'section/:id',  component: SectionHomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'stories/:id',  component: StoriesComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
