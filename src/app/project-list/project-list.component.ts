import { Component, Input } from '@angular/core';
import { BirthDayComponent } from '../birth-day/birth-day.component';
import { DSProjectsComponent } from '../ds-projects/ds-projects.component';
import { WebGLProjectComponent } from '../web-gl-project/web-gl-project.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  @Input() selectedProjectCategory = '';
  get data(): string {
    return this.selectedProjectCategory;
  }

}


