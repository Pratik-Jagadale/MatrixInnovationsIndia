import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { ProjectDropdownComponent } from './project-dropdown/project-dropdown.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { FormsModule } from '@angular/forms';
import { PhotoGalaryComponent } from './photo-galary/photo-galary.component';
import { BirthDayComponent } from './birth-day/birth-day.component';
import { WebGLProjectComponent } from './web-gl-project/web-gl-project.component';
import { DSProjectsComponent } from './ds-projects/ds-projects.component';
import { SpecialEffectsComponent } from './special-effects/special-effects.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    TeamComponent,
    AboutComponent,
    ProjectDropdownComponent,
    ProjectListComponent,
    PhotoGalaryComponent,
    BirthDayComponent,
    WebGLProjectComponent,
    DSProjectsComponent,
    SpecialEffectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
