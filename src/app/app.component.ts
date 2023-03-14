import { Component, ElementRef, ViewChild } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidebar')
  mySidebar!: ElementRef;

  element!: HTMLElement;
  element1!: HTMLElement;

  title = 'MatrixInnovationsIndia';

  constructor() {
    this.element = document.getElementById('sidebar') as HTMLElement;
  }

  openNav() {
    this.element = (document.getElementById('innerId')) as HTMLElement;
    this.element.style.width = "0px";

    this.element1 = (document.getElementById('sidebar')) as HTMLElement;
    this.element1.style.width = "0px";
    console.log("openNav clicked..");

    //document.getElementById("mySidebar").style.width = "250px";
    //document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav() {
    this.element.style.width = "0px";
    //document.getElementById("mySidebar").style.width = "0";
    ///document.getElementById("main").style.marginLeft = "0";
  }

}
