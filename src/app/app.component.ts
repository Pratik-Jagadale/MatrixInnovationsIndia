import { Component, ElementRef, ViewChild } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MatrixInnovationsIndia';

  public showHeader: boolean = false;
  public showMain: boolean = true;
  /*
    public details = navigator.userAgent;
    public regexpAndroid = new RegExp('android*');
    public regexpIPhone = new RegExp('iphone*');
    public regexpIPad = new RegExp('ipad*');
    public regexpLinux = new RegExp('Linux*');
  */
  public isMobileDevice: boolean = true;
  public isWindowsOrLinuxeDevice: boolean = false;

  constructor() {

    if (navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/iPhone/i)) {


      this.isMobileDevice = true;
      this.isWindowsOrLinuxeDevice = false;

      this.showHeader = false;
      this.showMain = true;

      console.log('This is Android Device\n');
    }
    else {

      console.log('This is Not Android Device\n');

      this.showHeader = true;
      this.showMain = true;

      this.isMobileDevice = false;
      this.isWindowsOrLinuxeDevice = true;
    }

  }

  openNav() {
    this.showHeader = !this.showHeader;
    this.showMain = !this.showMain;


    console.log('this.show =', this.showHeader);
    console.log('this.notToShow', this.showMain);

  }

  tabChanged() {
    this.showHeader = false;
    this.showMain = true;

  }

  ngOnInit() {
    if (window.screen.width === 360) { // 768px portrait

    }
  }


}
