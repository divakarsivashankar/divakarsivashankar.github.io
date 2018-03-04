import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContainerComponent } from './container/container.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { AccomplishmentsComponent } from './accomplishments/accomplishments.component';

import { AgmCoreModule } from '@agm/core';
import { TypewriterService } from './typewriter.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'career',
    component: CareerComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'accomplishments',
    component: AccomplishmentsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContainerComponent,
    AboutComponent,
    ProjectsComponent,
    PageNotFoundComponent,
    HomeComponent,
    CareerComponent,
    ContactComponent,
    AccomplishmentsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDeg60CJIFpcZuMXJz6Y3yx9hh1GrPHAOg'
    }),
    NgbModule.forRoot()
  ],
  providers: [TypewriterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
