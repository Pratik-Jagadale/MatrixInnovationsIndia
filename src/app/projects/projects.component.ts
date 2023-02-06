import { Component, OnInit } from '@angular/core';
import { timer, Subscription, map } from 'rxjs';
import { ProjectDropdownComponent } from '../project-dropdown/project-dropdown.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public title: string = 'ProjectsTab';
  public i: number = 0;
  public images = new Array(
    "./assets/ProjectHeader/01.jpg",
    "./assets/ProjectHeader/02.png",
    "./assets/ProjectHeader/03.png",
    "./assets/ProjectHeader/04.png",
    "./assets/ProjectHeader/05.png",
    "./assets/ProjectHeader/06.png",
    "./assets/ProjectHeader/07.png",
    "./assets/ProjectHeader/08.png"
  );
  public currentImage: string = this.images[0];
  public timerSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.timerSubscription = timer(0, 4000).pipe(
      map(() => {
        this.subdiv1();
      })
    ).subscribe();
  }

  subdiv1() {
    console.log(this.i);
    this.i++;
    if (this.i > this.images.length - 1) {
      this.i = 0; //reset index
    }
    this.currentImage = this.images[this.i];
  }

}
