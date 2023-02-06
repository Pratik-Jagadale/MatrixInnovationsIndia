import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { TeamComponent } from './team/team.component';
import { PhotoGalaryComponent } from './photo-galary/photo-galary.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "Home", component: HomeComponent },
  { path: "Projects", component: ProjectsComponent },
  { path: "Gallary", component: PhotoGalaryComponent },
  { path: "Team", component: TeamComponent },
  { path: "About", component: AboutComponent },

  //wildcard component
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
